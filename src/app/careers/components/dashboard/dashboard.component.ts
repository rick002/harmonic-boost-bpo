import { Component, OnInit } from '@angular/core';
import { AlertService } from 'src/app/harmonic-lib/utils/alert.util';
import { AuthService } from 'src/app/landing/services/auth.service';
import { CareersFilter, DEFAULT_FILTERS } from '../../models/careers.model';
import { CheckFilters, DATE_POSTED, JOB_TYPE, SECTOR, loadSectorsInChecks, parsePosted } from '../../models/check-filters.model';
import { CareersService } from '../../services/careers.service';
import { Router } from '@angular/router';
import { ApplicationsService } from 'src/app/applications/services/applications.service';
import * as moment from 'moment';

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
    private applicationsService: ApplicationsService,
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

  filterIfUserIsLoggedIn(positions: Array<any>): void {
    if (this.authService.isLoggedIn()) {
      this.applicationsService.getSavedPositionsByUser().subscribe(
        response =>
          this.posts = this.applicationsService.filterSavedPositions(positions, response.positions),
      )
    }
  }

  handlePositionsResponse(response: any): void {
    this.alertService.displaySuccessAlert('information loaded');
    setTimeout(() => this.alertService.hide(), 1000);
    this.posts = response.positions;
    this.filterIfUserIsLoggedIn(this.posts);
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

  handlePositionError(info: any): void {
    this.alertService.displayErrorAlert(info.error.message);
    setTimeout(() => this.alertService.hide(), 3000);
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

  handleApplyNowError({ err, clickedPosition }: any): void {
    clickedPosition.applyFailed = true;
    setTimeout(() => {
      this.resetApplyButton(clickedPosition);
    }, 4000);
  }

  applyNow(positionId: string): void {
    if (this.authService.isLoggedIn()) {
      const clickedPosition: any = this.posts.find(position => position.positionId === positionId);
      clickedPosition.isApplying = true;
      this.careersService.applyNow(positionId).subscribe(
        response => this.handleApplyNowResponse({ response, clickedPosition }),
        err => this.handleApplyNowError({ err, clickedPosition }),
      );
    } else {
      this.router.navigate(['/login']);
    }
  }

  getPositions(): void {
    this.alertService.displayLoadingAlert('loading information...');
    this.careersService.getPositions(this.filters).subscribe(
      response => this.handlePositionsResponse(response),
      err => this.handlePositionError(err),
    );
  }

  getAllSectors(): void {
    this.careersService.getAllSectors().subscribe(
      response => this.handleGetAllSectorsResponse(response),
      err => this.handlePositionError(err),
    );
  }

  handleGetAllSectorsResponse(response: any): void {
    this.sectors = JSON.parse(response.sectors);
    this.sector = loadSectorsInChecks(this.sectors);
  }

  filterPositionsByForm(formFilter: any): void {
    this.filters.searchTitle = formFilter.job_title;
    this.filters.location = formFilter.state_city_zip;
    this.filters.sectorCat = formFilter.sector;
    this.getPositions();
  }

  filterByPosted(checkbox: CheckFilters): void {
    this.filters.posted = checkbox.param.toLowerCase();
    this.filters.posted = parsePosted(checkbox);
    this.getPositions();
  }

  filterByJobType(checkbox: CheckFilters): void {
    this.filters.jobType = checkbox.param.toLowerCase();
    this.getPositions();
  }

  filterBySectorCat(checkbox: CheckFilters): void {
    this.filters.sectorCat = checkbox.param.toLowerCase();
    this.getPositions();
  }

  ngOnInit(): void {
    this.alertService.displayLoadingAlert('loading positions...');
    this.isAdmin = this.authService.isAdmin();
    this.getAllSectors();
    this.getPositions();
  }

}
