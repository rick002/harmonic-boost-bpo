import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Message } from '../models/message.model';

@Injectable({
  providedIn: 'root'
})
export class ContactUsService {

  headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/x-www-form-urlencoded' 
 });

  constructor(
    private http: HttpClient,
  ) { }

  sendContactMessage(contactMessage: Message): Observable<any> {
    const params: HttpParams = new HttpParams()
      .set('email', contactMessage.email)
      .set('name', contactMessage.name)
      .set('last-name', contactMessage.lastName)
      .set('phone', contactMessage.phone)
      .set('message', contactMessage.message);
    return this.http.post<any>('/api/message', params, { headers: this.headers });
  }

}
