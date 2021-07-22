import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  constructor(
    @Inject(PLATFORM_ID) 
    private platformId: Object
  ) { }

  isToken(): boolean {
    let token: string | null = '';
    if (isPlatformBrowser(this.platformId)) {
      token = localStorage.getItem('auth-info');
    }
    return token ? true : false;
  }

  getAuthInfo(): any {
    let tokenInfo: string | null = '';
    if (isPlatformBrowser(this.platformId)) {
      tokenInfo = localStorage.getItem('auth-info');
    }
    
    return tokenInfo ? JSON.parse(tokenInfo) : null;
  }

  removeAuthInfo(): void {
    if (this.isToken() && isPlatformBrowser(this.platformId)) {
      console.log('<Remove Auth Token Method> -> There is a token to remove');
      localStorage.removeItem('auth-info');
    }
  }

  setAuthInfo(tokenInfo: any): void {
    if (tokenInfo && isPlatformBrowser(this.platformId)) {
      localStorage.setItem('auth-info', JSON.stringify(tokenInfo));
    }
  }

  getRawToken(): string {
    if (this.isToken()) {
      const rawToken: string = this.getAuthInfo()?.token;
      console.log('Raw Token', rawToken);
      return rawToken;
    }
    return '';
  }

  getDecodedToken(): any {
    if (this.isToken()) {
      const service: JwtHelperService = new JwtHelperService();
      const authInfo: any = this.getAuthInfo();
      const decodedToken: any = service.decodeToken(authInfo.token);
      console.log('Decoded Token: ', decodedToken);
      return decodedToken;
    }
    return null;
  }

  isTokenNotExpired(): boolean {
    if (this.isToken()) {
      const rawToken: any = this.getRawToken();
      const service: JwtHelperService = new JwtHelperService();
      const isExpired: boolean = service.isTokenExpired(rawToken);
      console.log('Is Token Expired: ', isExpired);
      return !isExpired;
    }
    console.log('There is no token at all');
    return false;
  }

 

}
