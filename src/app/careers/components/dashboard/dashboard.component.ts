import { Component, OnInit } from '@angular/core';
import { CheckFilters, DATE_POSTED, JOB_TYPE, SECTOR } from '../models/check-filters.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  datePosted: Array<CheckFilters> = DATE_POSTED;
  jobType: Array<CheckFilters> = JOB_TYPE
  sector: Array<CheckFilters> = SECTOR;

  constructor() { }

  ngOnInit(): void {
  }

}
