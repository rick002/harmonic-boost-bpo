import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  bannerTitle: string = 'Welcome to the profile section';
  bannerContent: string = 'Here you can add and edit relevant information for all of your applications'  
  tabsMenu: Array<any> = [
    { title: 'dashboard' },
    { title: 'my profile' },
    { title: 'my resume' },
    { title: 'cv manager' },
    { title: 'personality type' },
    { title: 'change password' },
    { title: 'delete profile' },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
