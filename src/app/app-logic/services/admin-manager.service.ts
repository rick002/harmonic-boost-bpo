import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserToSignup } from 'src/app/landing/models/user.model';
import { TokenService } from 'src/app/landing/services/token.service';
import { RolesManager } from '../models/manager.model';

@Injectable({
  providedIn: 'root'
})
export class AdminManagerService {

  headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/x-www-form-urlencoded',
    'Authorization': this.tokenService.getRawToken(),
  });

  constructor(
    private http: HttpClient,
    private tokenService: TokenService,
  ) { }

  updateRole(tdd: RolesManager): Observable<any> {
    const params: HttpParams = new HttpParams()
      .set('email', tdd.email)
      .set('token', tdd.token = this.tokenService.getRawToken())
      .set('toAdmin', tdd.role);
    return this.http.post<any>('/api/adm', params, { headers: this.headers });
  }

  getUserInfo(): UserToSignup {
    return this.tokenService.getAuthInfo().userInfo as UserToSignup;
  }

}
