import { Component, Input, OnInit } from '@angular/core';
import { CheckFilters } from '../models/check-filters.model';

@Component({
  selector: 'app-form-filter',
  templateUrl: './form-filter.component.html',
  styleUrls: ['./form-filter.component.scss']
})
export class FormFilterComponent implements OnInit {
  @Input() sector: Array<CheckFilters> = [];
  constructor() { }

  ngOnInit(): void {
  }

}
