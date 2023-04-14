import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { ApiResponse } from './api-response';

@Injectable({
  providedIn: 'root'
})
export class AuthManagerService {

  constructor(private http: HttpClient) { }

  updateSession() {
    let match: Array<any> | null = document.cookie.match(/(?:^|\s)session-expiry=([^;]+)/);
    if (match !== null && match.length > 0) {
      localStorage.setItem('session-expiry', match[1]);
    }
  }

  isLogged() {
    let expiry = localStorage.getItem('session-expiry') || '0';
    
    return parseInt(expiry) >= (new Date().getTime() / 1000);
  }

  keepSessionAlive() {
    this.http.get<ApiResponse>('api/keep-alive')
      .pipe(
        catchError((response: HttpErrorResponse) => {
          this.updateSession();
          
          return throwError(() => new Error('Something gone wrong.'));
        })
      )
      .subscribe((response: ApiResponse) => {
        this.updateSession();
      });
  }
}
