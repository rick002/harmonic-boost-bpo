import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root',
})
export class TokenService {

  constructor() {}

  isToken(): boolean {
    const token: string | null = localStorage.getItem('auth-info');
    return token ? true : false;
  }

  getAuthInfo(): any {
    const tokenInfo: string | null = localStorage.getItem('auth-info');
    return tokenInfo ? JSON.parse(tokenInfo) : null;
  }

  getTokenInfo(): any {
    if (this.isToken()) {
      const service: JwtHelperService = new JwtHelperService();
      const tokenInfo: any = this.getAuthInfo();
      const decodedToken: any = service.decodeToken(tokenInfo.token);
      return decodedToken;
    }
    return null;
  }

  isTokenExpired(): boolean {
    if (this.isToken()) {
      const tokenInfo: any = this.getTokenInfo();
      const service: JwtHelperService = new JwtHelperService();
      const isExpired: boolean = service.isTokenExpired(tokenInfo.token);
      console.log(tokenInfo.token);
      return isExpired;
    }
    return false;
  }

  setAuthInfo(tokenInfo: any): void {
    if (tokenInfo) {
      localStorage.setItem('auth-info', JSON.stringify(tokenInfo));
    }
  }
}
