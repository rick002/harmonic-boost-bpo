import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-position-post',
  templateUrl: './position-post.component.html',
  styleUrls: ['./position-post.component.scss']
})
export class PositionPostComponent implements OnInit {
  @Input() isAdmin: boolean = false;
  @Input() savedPosts: Array<any> = [];


  @Output() applyNow: EventEmitter<any> = new EventEmitter<any>();
  
  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  openDetails(positionId: string): void {
    this.router.navigate(['/admin/details/', positionId]);
  }
  
}
