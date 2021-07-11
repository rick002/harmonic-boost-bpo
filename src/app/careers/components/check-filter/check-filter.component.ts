import { Component, Input, OnInit } from '@angular/core';
import { CheckFilters } from '../../models/check-filters.model';

@Component({
  selector: 'app-check-filter',
  templateUrl: './check-filter.component.html',
  styleUrls: ['./check-filter.component.scss']
})
export class CheckFilterComponent implements OnInit {
  @Input() options: Array<CheckFilters> = [];
  @Input() title: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
