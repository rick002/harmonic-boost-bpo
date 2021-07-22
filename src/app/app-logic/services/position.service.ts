import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Position } from '../models/positions-form.model';

@Injectable({
  providedIn: 'root'
})
export class PositionService {

  constructor(
    private http: HttpClient,
  ) { }

  createPosition(tdd: Position): void {
    
  }

  editPosition(): void {
    
  }

  getPositionById(): void {
    
  }

}
