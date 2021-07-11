import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User, UserToSignup } from '../models/user.model';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  headers: HttpHeaders = new HttpHeaders({
     'Content-Type': 'application/x-www-form-urlencoded' 
  });

  constructor(
    private http: HttpClient,
    private tokenService: TokenService
  ) { }

  isLoggedIn(): boolean {
    return this.tokenService.isTokenExpired();
  }

  login(user: User): Observable<any> {
    const params: HttpParams = new HttpParams()
    .set('email', user.email)
    .set('password', user.password);
    return this.http.post<any>('/api/login', params, { headers: this.headers });
  }

  signUp(user: UserToSignup): Observable<any> {
    const params: HttpParams = new HttpParams()
    .set('firstName', user.name)
    .set('lastName', user.lastName)
    .set('email', user.email)
    .set('password', user.password)
    .set('passwordConfirmed', user.confirmPassword)
    .set('phone', user.phoneNumber);
    return this.http.post<any>('/api/register', params, { headers: this.headers });
  }

  setTokenInfo(authInfo: any): void {
    this.tokenService.setAuthInfo(authInfo);
  }
  
}
