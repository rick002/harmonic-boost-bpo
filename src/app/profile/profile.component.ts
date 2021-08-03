import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  bannerTitle: string = 'Welcome to the profile section';
  bannerContent: string = 'Here you can add and edit relevant information for all of your applications'  

  constructor() { }

  ngOnInit(): void {
  }

}
