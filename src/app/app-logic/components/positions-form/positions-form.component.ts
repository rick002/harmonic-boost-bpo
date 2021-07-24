import { TitleCasePipe } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { CareersService } from 'src/app/careers/services/careers.service';
import { LocationService } from 'src/app/harmonic-lib/services/location.service';
import { DEFAULT_POSITION, getDefaultPositionsForm, Position, PositionsForm } from '../../models/positions-form.model';
import { PositionService } from '../../services/position.service';

@Component({
  selector: 'app-positions-form',
  templateUrl: './positions-form.component.html',
  styleUrls: ['./positions-form.component.scss']
})
export class PositionsFormComponent implements OnInit {
  @Input() positionId: string = '';
  @Input() displayForm: boolean = true;
  @Input() positionsForm: PositionsForm = getDefaultPositionsForm();
  
  
  @Output() exec: EventEmitter<any> = new EventEmitter<any>();

  @Input() isVisible: boolean = false;
  @Input() successAlert: boolean = false;
  @Input() loadingAlert: boolean = false;
  @Input() failAlert: boolean = false;

  @Input() message: string = 'executing task...';

  sectors: Array<string> = [];
  countries: Array<string> = [];
  cities: Array<string> = [];

  position: Position = DEFAULT_POSITION;

  constructor(
    private fb: FormBuilder,
    private positionService: PositionService,
    private locationSevice: LocationService,
    private careersService: CareersService,
    private titleCasePipe: TitleCasePipe,

  ) { }


  positionForm: FormGroup = this.fb.group({
    positionTitle: ['', Validators.required],
    positionSector: ['', Validators.required],
    positionCompany: ['', Validators.required],
    positionAddress: ['', Validators.required],
    positionCity: ['', Validators.required],
    positionCountry: ['', Validators.required],
    positionjobType: ['', Validators.required],
  });



  ngOnInit(): void {
    this.careersService.getAllSectors().subscribe(
      response => this.handleResponse(response),
      err => this.handleError(err),
    );

    this.locationSevice.getCountries().subscribe(
      response => this.countries = JSON.parse(response.countries),
      err => console.log(err),
    );

    this.positionForm.get('positionCountry')?.valueChanges.subscribe(
      selected => this.locationSevice.getCities(selected).subscribe(
        response => this.cities = JSON.parse(response.cities),
        err => console.log(err),
      )
    );

    if (this.positionsForm.isDetails) {
      this.getPositionById();
    }
  }

  getPositionById(): void {
    if (this.positionId) {
      this.positionService.getPositionById(this.positionId).subscribe(
        response => {
          this.position = response.position as Position;
          this.format(this.position);
          this.positionForm.patchValue(this.position);
        },
        err => console.log(err),
      );
    }
  }


  submit(): void {
    if (this.positionForm.valid) {
      const value: Position = this.positionForm.value as Position;
      value.positionId = this.positionId;
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

  handleResponse(response: any): void {
    this.sectors = JSON.parse(response.sectors || []);
  }

  handleError(info: any): void {
    console.log(info);
  }

  private format(info: any): any {
    Object.keys(info).forEach(
      key => info[key] = this.titleCasePipe.transform(info[key])
    );
  }

}
