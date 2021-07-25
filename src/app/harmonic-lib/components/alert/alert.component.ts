import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { of } from 'rxjs';



@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {
  @Input() message: string = 'performing action';
  @Input() isVisible: boolean = false;
  @Input() warning: boolean = false;
  @Input() success: boolean = false;
  @Input() fail: boolean = false;
  @Input() w: string = '';

  @Output() reset: EventEmitter<any> = new EventEmitter<any>();


  constructor() { }

  ngOnInit(): void {
  }

  resetValues(): void {
    this.isVisible = false;
    this.warning = false;
    this.success = false;
    this.fail = false;

    this.reset.emit({ 
      isVisible: this.isVisible, 
      warning: this.warning, 
      success: this.success, 
      fail: this.fail 
    });
  }

}
