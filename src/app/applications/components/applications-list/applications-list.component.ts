import { Component, Input, OnInit } from '@angular/core';
import { Application } from '../../models/applications.model';

@Component({
  selector: 'app-applications-list',
  templateUrl: './applications-list.component.html',
  styleUrls: ['./applications-list.component.scss']
})
export class ApplicationsListComponent implements OnInit {
  @Input() applications: Array<Application> = [];

  constructor() { }

  ngOnInit(): void {
    console.log(this.applications);
  }

}
