import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart, NavigationCancel, NavigationEnd } from '@angular/router';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { filter } from 'rxjs/operators';
import { environment } from 'src/environments/environment.prod';
declare let $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  location: any;
  routerSubscription: any;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.recallJsFuntions();
    console.log(environment.production);
    console.log(environment.apiUrl);
  }

  recallJsFuntions() {
    this.router.events
    .subscribe((event) => {
        if ( event instanceof NavigationStart ) {
            $('.preloader').fadeIn('slow');
        }
    });
    this.routerSubscription = this.router.events
    .pipe(filter(event => event instanceof NavigationEnd || event instanceof NavigationCancel))
    .subscribe(event => {
        $.getScript('../assets/js/main.js');
        $('.preloader').fadeOut('slow');
        this.location = this.router.url;
        if (!(event instanceof NavigationEnd)) {
            return;
        }
        window.scrollTo(0, 0);
    });
}
}
