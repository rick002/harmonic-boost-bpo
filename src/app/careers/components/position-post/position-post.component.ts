import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { DEFAULT_POSTS } from '../../models/posts.model';


@Component({
  selector: 'app-position-post',
  templateUrl: './position-post.component.html',
  styleUrls: ['./position-post.component.scss']
})
export class PositionPostComponent implements OnInit {
  @Input() isAdmin: boolean = false;
  @Input() savedPosts: Array<any> = [];
  @Output() cardEvent: EventEmitter<any> = new EventEmitter<any>();

  posts: Array<any> = DEFAULT_POSTS;

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  openDetails(): void {
    this.router.navigate(['/admin/details']);
  }

}
