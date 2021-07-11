import { Component, OnInit } from '@angular/core';
import { CareersFilter, DEFAULT_FILTERS } from '../../models/careers.model';
import { CheckFilters, DATE_POSTED, JOB_TYPE, SECTOR } from '../../models/check-filters.model';
import { CareersService } from '../../services/careers.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  datePosted: Array<CheckFilters> = DATE_POSTED;
  jobType: Array<CheckFilters> = JOB_TYPE
  sector: Array<CheckFilters> = SECTOR;
  
  filters: CareersFilter = DEFAULT_FILTERS;
  posts: Array<any> = [];

  constructor(
    private careersService: CareersService,
  ) { }


  handleResponse(response: any): void {
    console.log(response);
    this.posts = response;
  }

  handleError(err: any): void {
    console.log(err);
  }

  ngOnInit(): void {
    this.careersService.getPositions(this.filters).subscribe(
      response => this.handleResponse(response),
      err => this.handleError(err),
    );
  }

}
