import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DEFAULT_POSTS } from '../../models/posts.model';


@Component({
  selector: 'app-position-post',
  templateUrl: './position-post.component.html',
  styleUrls: ['./position-post.component.scss']
})
export class PositionPostComponent implements OnInit {
  @Input() savedPosts: Array<any> = [];
  @Output() cardEvent: EventEmitter<any> = new EventEmitter<any>();

  posts: Array<any> = DEFAULT_POSTS;

  constructor() { }

  ngOnInit(): void {
  }

}
