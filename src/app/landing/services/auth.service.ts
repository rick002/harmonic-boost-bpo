import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
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
    private tokenService: TokenService,
    private router: Router,
  ) { }

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
    console.log('Setting Token Info: ', authInfo);
    this.tokenService.setAuthInfo(authInfo);
  }

  getTokenInfo(): any {
    console.log('Getting Token Info: ');
    return this.tokenService.getAuthInfo();
  }
  isLoggedIn(): boolean {
    return this.tokenService.isTokenNotExpired();
  }

  isAdmin(): boolean {
    const info: any = this.tokenService.getAuthInfo();
    return info && info.userInfo?.rol === 'admin' ? true : false;
  }
  
  roleBasedRedirection(): void {
    const info: any = this.tokenService.getAuthInfo();
    if (info) {
      if (info.userInfo.rol === 'normal') {
        this.router.navigate(['/careers']);
      } else if (info.userInfo.rol === 'admin') {
        this.router.navigate(['/admin']);
      }
    }
  }

  logout(): void {
    this.tokenService.removeAuthInfo();
    this.router.navigate(['/']);
  }

}
