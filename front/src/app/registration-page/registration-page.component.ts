import { Component, Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ApiResponse } from '../api-response';
import { MessageService } from '../message.service';

@Injectable()
@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.css']
})
export class RegistrationPageComponent {
  errors: { [field: string]: (string | null) } = {};

  constructor(
    private http: HttpClient,
    private router: Router,
    private messageService: MessageService
  ) { }

  onSubmit(form: NgForm) {
    this.http
      .post<ApiResponse>('api/registration', form.value)
      .pipe(
        catchError((response: HttpErrorResponse) => {
          if (response.error.errors) {
            this.errors = response.error.errors;
          }
          
          return throwError(() => new Error('Registration failed.'));
        })
      )
      .subscribe((response: ApiResponse) => {
        if (response.message) {
          this.messageService.add(response.message);
        }
        this.router.navigate(['/']);
      });
  }

  removeError(field: string) {
    this.errors[field] = null;
  }
}
