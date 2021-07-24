import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/landing/services/auth.service';
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

  isAdmin: boolean = false;
  
  sectors: Array<string> = [];

  constructor(
    private careersService: CareersService,
    private authService: AuthService,
  ) { }


  handleResponse(response: any): void {
    this.posts = response.positions;
    this.posts.forEach(
      post => {
        post.positionCompany = post.positionCompany.replace(',', '');
        post.positionAddress = post.positionAddress.replace(',', '');
        post.positionTitle = post.positionTitle.replace(',', '');
      }
    );
  }

  handleError(err: any): void {
    console.log(err);
  }

  ngOnInit(): void {
    this.isAdmin = this.authService.isAdmin();
    this.careersService.getPositions(this.filters).subscribe(
      response => this.handleResponse(response),
      err => this.handleError(err),
    );

    this.careersService.getAllSectors().subscribe(
      response => this.sectors = JSON.parse(response.sectors),
      err => this.handleError(err),
    )
  }

}
