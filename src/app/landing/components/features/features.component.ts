import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  sectionTitle: sectionTitleContent[] = [
    {
        subTitle: 'Find Out Incredible Solutions',
        title: 'We Always Try To Exceed Client Expectations',
        paragraphText: 'We provide you with amazing solutions that adapt to the challenges of your business'
    }
]

singleFeatures: singleFeaturesContent[] = [
    {
        icon: 'icofont-edit',
        title: 'Tailored To Your Business',
        paragraphText: 'Our resources are safe, cost-effective, and exceptionally competent regardless of the level IT expertise required for the job.'
    },
    {
        icon: 'icofont-upload-alt',
        title: 'In The Public Sector',
        paragraphText: 'We sensitevely acertain products and services offered to government/public entities.'
    },
    {
        icon: 'icofont-pie-chart',
        title: 'As Healthcare Provider',
        paragraphText: 'We work closely with healthcare providers, implementing technology-oriented solutions.'
    }
]

}


class sectionTitleContent {
  subTitle : string = '';
  title : string = '';
  paragraphText : string = '';
}

class singleFeaturesContent {
  icon : string = '';
  title : string = '';
  paragraphText : string = '';
}