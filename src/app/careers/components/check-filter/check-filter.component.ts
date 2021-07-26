import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { CheckFilters } from '../../models/check-filters.model';

@Component({
  selector: 'app-check-filter',
  templateUrl: './check-filter.component.html',
  styleUrls: ['./check-filter.component.scss']
})
export class CheckFilterComponent implements OnInit {
  @Input() options: Array<CheckFilters> = [];
  @Input() title: string = '';

  @Output() filterByChecks: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  filterByCheck(checkbox: number): void {
    this.options.forEach(checkbox_model => checkbox_model.value = false);
    this.options[checkbox].value = true;
    this.filterByChecks.emit(this.options[checkbox]);
  }

}
