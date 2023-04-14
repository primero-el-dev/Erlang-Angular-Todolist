import { Component, Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ApiResponse } from './api-response';
import { AuthManagerService } from './auth-manager.service';
import { MessageService } from './message.service';

@Injectable()
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'my-app';
  response$: Observable<ApiResponse> | null = null;
  error: string | null = null;

  constructor(
    public router: Router,
    public authManager: AuthManagerService,
    public messageService: MessageService,
    private http: HttpClient
  ) { }

  logout(e: Event) {
    e.preventDefault();
    this.http
      .post<ApiResponse>('api/logout', {})
      .pipe(
        catchError((resp: HttpErrorResponse) => {
          this.authManager.updateSession();
          this.error = resp.error?.error || null;
          return throwError(() => new Error('Something bad happened; please try again later.'));
        })
      )
      .subscribe((response: ApiResponse) => {
        this.authManager.updateSession();
        if (response.message) {
          this.messageService.add(response.message);
        }
        this.router.navigate(['/login']);
      });
  }

  trackByFn(i: number) {
    // this.messageService.delete(i);
    return i;
  }
}
