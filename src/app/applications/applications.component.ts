import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-applications',
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.scss']
})
export class ApplicationsComponent implements OnInit {
  bannerTitle: string = 'my applications';
  bannerContent: string = 'Here is the list of applications you that did.';

  constructor() { }

  ngOnInit(): void {
  }

}
