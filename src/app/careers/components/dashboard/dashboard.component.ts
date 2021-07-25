import { Component, OnDestroy, OnInit } from '@angular/core';
import { AlertService } from 'src/app/harmonic-lib/utils/alert.util';
import { AuthService } from 'src/app/landing/services/auth.service';
import { CareersFilter, DEFAULT_FILTERS } from '../../models/careers.model';
import { CheckFilters, DATE_POSTED, JOB_TYPE, SECTOR } from '../../models/check-filters.model';
import { CareersService } from '../../services/careers.service';
import * as moment from 'moment';
import { Router } from '@angular/router';


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


  alertService: AlertService = new AlertService();

  constructor(
    private careersService: CareersService,
    private authService: AuthService,
    private router: Router,
  ) { }

  sortByRecent(): void {
    this.posts.sort(
      (postBefore, postNext) =>
        moment(postBefore.positionPublishedDatee).valueOf() - moment(postNext.positionPublishedDate).valueOf()
    );
  }

  sortByOlder(): void {
    this.posts.sort(
      (postBefore, postNext) =>
        moment(postNext.positionPublishedDatee).valueOf() - moment(postBefore.positionPublishedDate).valueOf()
    );
   }

  handlePositionsResponse(response: any): void {
    this.alertService.hide();
    this.posts = response.positions;
    this.posts.forEach(
      post => {
        post.positionCompany = post.positionCompany.replace(',', '');
        post.positionAddress = post.positionAddress.replace(',', '');
        post.positionTitle = post.positionTitle.replace(',', '');
        post.isApplying = false;
        post.applyFailed = false;
      }
    );
  }

  handlePositionError(err: any): void {
    this.alertService.displayErrorAlert(err);
  }

  resetApplyButton(clickedPosition: any): void {
    clickedPosition.isApplying = false;
    clickedPosition.applyFailed = false;
  }

  handleApplyNowResponse({ response, clickedPosition }: any): void {
    setTimeout(() => {
      this.router.navigate(['/applications']);
      this.resetApplyButton(clickedPosition);
    }, 2000);
    
  }

  handleApplyNowError({err, clickedPosition}: any): void {
    clickedPosition.applyFailed = true;
    setTimeout(() => {
      this.resetApplyButton(clickedPosition);
    }, 4000);
  }

  applyNow(positionId: string): void {
    const clickedPosition: any = this.posts.find(position => position.positionId === positionId);
    clickedPosition.isApplying = true;
    this.careersService.applyNow().subscribe(
      response => this.handleApplyNowResponse({ response, clickedPosition }),
      err => this.handleApplyNowError({ err, clickedPosition }),
    );
  }
  
  ngOnInit(): void {
    this.alertService.displayLoadingAlert('loading positions...');
    this.isAdmin = this.authService.isAdmin();

    this.careersService.getPositions(this.filters).subscribe(
      response => this.handlePositionsResponse(response),
      err => this.handlePositionError(err),
    );

    this.careersService.getAllSectors().subscribe(
      response => this.sectors = JSON.parse(response.sectors),
      err => this.handlePositionError(err),
    );
  }

}
