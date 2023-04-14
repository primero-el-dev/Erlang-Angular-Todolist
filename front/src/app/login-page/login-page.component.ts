import { Component, Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ApiResponse } from '../api-response';
import { AuthManagerService } from '../auth-manager.service';
import { MessageService } from '../message.service';

@Injectable()
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  error: string | null = null;

  constructor(
    private http: HttpClient,
    private authManager: AuthManagerService,
    private router: Router,
    private messageService: MessageService
  ) { }

  onSubmit(form: NgForm) {
    this.http
      .post<ApiResponse>('api/login', form.value)
      .pipe(
        catchError((response: HttpErrorResponse) => {
          this.authManager.updateSession();
          this.error = response.error.error;
          
          return throwError(() => new Error('Login failed.'));
        })
      )
      .subscribe((response: ApiResponse) => {
        this.authManager.updateSession();
        if (response.message) {
          this.messageService.add(response.message);
        }
        this.router.navigate(['/']);
      });
  }

  removeError() {
    this.error = null
  }
}
