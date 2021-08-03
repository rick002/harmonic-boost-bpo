import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab-set',
  templateUrl: './tab-set.component.html',
  styleUrls: ['./tab-set.component.scss']
})
export class TabSetComponent implements OnInit {
  @Input() menuItems: Array<any> = [];

  constructor() { }

  ngOnInit(): void {
  }

}
