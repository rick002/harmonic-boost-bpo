import { Component, OnInit } from '@angular/core';
import { PositionsForm } from '../../models/positions-form.model';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  positionsForm: PositionsForm = {
    title: 'create a new position',
    buttonLabel: 'post this new job',
    isCreate: true,
    isUpdate: false,
    isRemoveButtonVisible: false,
  };

  constructor() { }

  ngOnInit(): void {
  }

}
