import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-position-post',
  templateUrl: './position-post.component.html',
  styleUrls: ['./position-post.component.scss']
})
export class PositionPostComponent implements OnInit {
  @Input() savedPosts: Array<any> = [];
  @Output() cardEvent: EventEmitter<any> = new EventEmitter<any>();

  posts: Array<any> = [
    {
      title: 'Inbound Customer Service Associate ',
      company: '@Boost BPO',
      address: 'Avenida Carlos Perez Ricart 35, Santo Domingo, Dominican Republic',
      modality: 'Full Time',
      date: '25 FEB, 2020',
    },
    {
      title: 'Call Examiner - Health Care',
      company: '@Boost BPO',
      address: 'Avenida Carlos Perez Ricart 35, Santo Domingo, Dominican Republic',
      modality: 'Full Time',
      date: '25 FEB, 2020',
    },
    {
      title: 'Lead Profiler',
      company: '@Boost BPO',
      address: 'Avenida Carlos Perez Ricart 35, Santo Domingo, Dominican Republic',
      modality: 'Full Time',
      date: '25 FEB, 2020',
    },
    {
      title: 'Virtual Assistant',
      company: '@Boost BPO',
      address: 'Avenida Carlos Perez Ricart 35, Santo Domingo, Dominican Republic',
      modality: 'Full Time',
      date: '25 FEB, 2020',
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
