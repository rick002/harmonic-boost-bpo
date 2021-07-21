import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/landing/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isLoggedIn: boolean = false;
  isAdmin: boolean = true;
  userInfo: any = {};

  constructor(
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
    this.isLoggedIn = this.authService.isLoggedIn();
    // this.isAdmin = this.authService.isAdmin();
    this.userInfo = this.authService.getTokenInfo()?.userInfo;
  }
  
  logout(): void {
    this.authService.logout();
    this.isAdmin = false;
    this.isLoggedIn = false;
  }

}
