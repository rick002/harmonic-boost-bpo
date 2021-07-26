import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenService } from 'src/app/landing/services/token.service';

@Injectable({
  providedIn: 'root'
})
export class ApplicationsService {

  headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/x-www-form-urlencoded'
  });

  constructor(
    private http: HttpClient,
    private tokenService: TokenService,
  ) { }

  getSavedPositionsByUser(): Observable<any> {
    const params: HttpParams = new HttpParams()
    .set('tokenValidar', this.tokenService.getRawToken());
    return this.http.post<any>('/api/getsavedpositions', params, { headers: this.headers });
  }

  filterSavedPositions(positions: any[], comparing: any[]): Array<any> {
    const filtered: Array<any> = [];
    positions.forEach(
      position => {
        const savedPosition = comparing.find(saved => saved.positionId === position.positionId);
        if (!savedPosition) {
          filtered.push(position);
        }
      }
    )

    console.log(filtered);
    return filtered;
  }
}
