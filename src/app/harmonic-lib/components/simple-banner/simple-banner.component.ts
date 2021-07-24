import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-banner',
  templateUrl: './simple-banner.component.html',
  styleUrls: ['./simple-banner.component.scss']
})
export class SimpleBannerComponent implements OnInit {
  @Input() title: string = '';
  @Input() content: string = '';
  
  constructor() { }

  ngOnInit(): void {
  }

}
