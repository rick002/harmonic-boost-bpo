import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(private http: HttpClient) { }

  getCountries(): Observable<any> {
    return this.http.get<any>('/api/countries');
  }

  getCities(country: string): Observable<any> {
    return this.http.get<any>(`/api/cities?country_name=${country}`);
  }
  
}
