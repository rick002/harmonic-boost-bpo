import { Component, OnInit } from '@angular/core';
import { Application, MOCK_APPLICATIONS } from './models/applications.model';

@Component({
  selector: 'app-applications',
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.scss']
})
export class ApplicationsComponent implements OnInit {
  bannerTitle: string = 'my applications';
  bannerContent: string = 'Here is the list of applications you that did.';

  applications: Array<Application> = MOCK_APPLICATIONS;
  constructor() { }

  ngOnInit(): void {
  }

}
