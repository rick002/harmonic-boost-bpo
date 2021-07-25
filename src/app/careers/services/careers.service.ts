import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CareersFilter } from '../models/careers.model';

@Injectable({
  providedIn: 'root'
})
export class CareersService {
  headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/x-www-form-urlencoded'
  });

  constructor(
    private http: HttpClient,
  ) { }

  getPositions(filters: CareersFilter): Observable<any> {
    const params: HttpParams = new HttpParams()
    .set('search_title', filters.searchTitle)
    .set('location', filters.location)
    .set('sector_cat', filters.sectorCat)
    .set('ajax_filter', filters.ajaxFilter)
    .set('posted', filters.posted)
    .set('job_type', filters.jobType)
    .set('sort-by', filters.sortBy)

    return this.http.post<any>('/api/careers', params, { headers: this.headers });
  }

  applyNow(): Observable<any> {
    return of({});
  }
  getAllSectors(): Observable<any> {
    return this.http.get<any>('/api/careers/sectors');
  }


}
