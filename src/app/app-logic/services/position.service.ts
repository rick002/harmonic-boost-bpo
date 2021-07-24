import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenService } from 'src/app/landing/services/token.service';
import { Position } from '../models/positions-form.model';

@Injectable({
  providedIn: 'root'
})
export class PositionService {

  headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/x-www-form-urlencoded',
    'Authorization': this.tokenService.getRawToken(),
  });

  constructor(
    private http: HttpClient,
    private tokenService: TokenService,
  ) { }

  getPositionsAsParams(tdd: Position): HttpParams {
    return new HttpParams()
      .set('position', tdd.positionTitle)
      .set('company', tdd.positionCompany)
      .set('address', tdd.positionAddress)
      .set('city', tdd.positionCity)
      .set('country', tdd.positionCountry)
      .set('positionSector', tdd.positionSector)
      .set('positionsType', tdd.positionjobType);
  }

  createPosition(tdd: Position): Observable<any> {
    const params: HttpParams = this.getPositionsAsParams(tdd);
    return this.http.post<any>('/api/position', params, { headers: this.headers });
  }

  editPosition(tdd: Position): Observable<any> {
    const params: HttpParams = this.getPositionsAsParams(tdd)
    .set('positionId', tdd.positionId || '');
    return this.http.put<any>('/api/position', params, { headers: this.headers });
  }

  getPositionById(positionId: string): Observable<any> {
    const headers: HttpHeaders = new HttpHeaders({ 'Authorization': this.tokenService.getRawToken() });
    return this.http.get<any>(`/api/position?positionId=${positionId}`, { headers });
  }

  deletePosition(positionId: string): Observable<any> {
    const headers: HttpHeaders = new HttpHeaders({ 'Authorization': this.tokenService.getRawToken() });
    return this.http.delete<any>(`/api/position?positionId=${positionId}`, { headers });
  }

}
