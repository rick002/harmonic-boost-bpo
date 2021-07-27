import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenService } from 'src/app/landing/services/token.service';
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
    private tokenService: TokenService,
  ) { }

  getPositions(filters: CareersFilter): Observable<any> {
    const params: HttpParams = new HttpParams()
    .set('search_title', filters.searchTitle)
    .set('stateCity', filters.location)
    .set('sector_cat', filters.sectorCat)
    .set('ajax_filter', filters.ajaxFilter)
    .set('posted', filters.posted)
    .set('job_type', filters.jobType)
    .set('sort-by', filters.sortBy)

    return this.http.post<any>('/api/careers', params, { headers: this.headers });
  }

  applyNow(positionId: string): Observable<any> {
    const params: HttpParams = new HttpParams()
    .set('positionId', positionId)
    .set('token', this.tokenService.getRawToken());
    this.headers.set('Authorization', this.tokenService.getRawToken());
    return this.http.post<any>('/api/saveposition', params, { headers: this.headers });
  }

  getAllSectors(): Observable<any> {
    return this.http.get<any>('/api/careers/sectors');
  }

}
