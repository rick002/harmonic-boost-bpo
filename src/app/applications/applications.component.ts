import { Component, OnInit } from '@angular/core';
import { AlertService } from '../harmonic-lib/utils/alert.util';
import { Application } from './models/applications.model';
import { ApplicationsService } from './services/applications.service';

@Component({
  selector: 'app-applications',
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.scss']
})
export class ApplicationsComponent implements OnInit {
  bannerTitle: string = 'my applications';
  bannerContent: string = 'Here is the list of applications you that did.';

  applications: Array<Application> = [];
  alert: AlertService = new AlertService();

  constructor(
    private applicationsService: ApplicationsService,
  ) { }

  ngOnInit(): void {
    this.applicationsService.getSavedPositionsByUser().subscribe(
      response => this.applications = response.positions,
      err => console.log(err),
    );
  }

}
