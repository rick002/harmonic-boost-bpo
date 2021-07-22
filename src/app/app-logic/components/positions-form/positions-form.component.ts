import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { getDefaultPositionsForm, Position, PositionsForm } from '../../models/positions-form.model';

@Component({
  selector: 'app-positions-form',
  templateUrl: './positions-form.component.html',
  styleUrls: ['./positions-form.component.scss']
})
export class PositionsFormComponent implements OnInit {
  @Input() positionsForm: PositionsForm = getDefaultPositionsForm();
  
  @Output() exec: EventEmitter<any> = new EventEmitter<any>();

  @Input() isVisible: boolean = false;
  @Input() successAlert: boolean = false;
  @Input() loadingAlert: boolean = false;
  @Input() failAlert: boolean = false;

  @Input() message: string = 'executing task...';

  positionForm: FormGroup = this.fb.group({
    positionTitle: ['', Validators.required],
    positionSector: ['', Validators.required],
    positionCompany: ['', Validators.required],
    positionAddress: ['', Validators.required],
    positionCity: ['', Validators.required],
    positionCountry: ['', Validators.required],
    positionjobType: ['', Validators.required],
  });
  
  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
  }

  submit(): void {
    if (this.positionForm.valid) {
      this.exec.emit(this.positionForm.value as Position);
    } else {
      this.failAlert = true;
      this.isVisible = true;
      this.message = 'all fields required';
    }
  }

  resetValues(values: any): void {
    this.isVisible = false;
    this.loadingAlert = false;
    this.successAlert = false;
    this.failAlert = false;
  }

}
