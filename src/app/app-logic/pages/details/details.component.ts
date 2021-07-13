import { Component, OnInit } from '@angular/core';
import { PositionsForm } from '../../models/positions-form.model';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  positionsForm: PositionsForm = {
    title: 'details of this position',
    buttonLabel: 'update this position',
    isCreate: false,
    isUpdate: true,
    isRemoveButtonVisible: false,
  };

  username: string = 'julio garcia';

  constructor() { }

  ngOnInit(): void {
  }

}
