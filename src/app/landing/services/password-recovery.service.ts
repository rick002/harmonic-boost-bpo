import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PasswordRecoveryService {

  headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/x-www-form-urlencoded'
 });


  constructor(
    private http: HttpClient,
  ) { }

  sendRecoveryEmail({ email }: any): Observable<any> {
    const params: HttpParams = new HttpParams().set('email', email);
    return this.http.post<any>('/api/password/recovery', params, { headers: this.headers });
  }

  changePassword(tdd: any): Observable<any> {
    const params: HttpParams = new HttpParams()
      .set('token',tdd?.token)
      .set('newPass', tdd?.newPassword);
    return this.http.post<any>('/api/update_password', params, { headers: this.headers });
  }


}
