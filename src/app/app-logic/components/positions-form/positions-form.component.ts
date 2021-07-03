import { Component, Input, OnInit } from '@angular/core';
import { getDefaultPositionsForm, PositionsForm } from '../../models/positions-form.model';

@Component({
  selector: 'app-positions-form',
  templateUrl: './positions-form.component.html',
  styleUrls: ['./positions-form.component.scss']
})
export class PositionsFormComponent implements OnInit {
  @Input() positionsForm: PositionsForm = getDefaultPositionsForm();
  
  constructor() { }

  ngOnInit(): void {
  }

}
