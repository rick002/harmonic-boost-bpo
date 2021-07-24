import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CheckFilters } from '../../models/check-filters.model';

@Component({
  selector: 'app-form-filter',
  templateUrl: './form-filter.component.html',
  styleUrls: ['./form-filter.component.scss']
})
export class FormFilterComponent implements OnInit {
  @Input() sector: Array<CheckFilters> = [];
  @Output() search: EventEmitter<any> = new EventEmitter<any>();
  
  @Input() sectors: Array<string> = [];
  
  filterForm: FormGroup = this.fb.group({
    job_title: ['', [Validators.required]],
    state_city_zip: ['', [Validators.required]],
    sector: ['', [Validators.required]],
  });

  

  constructor(
    private fb: FormBuilder,
  ) { }

  doSearch(): void {
    if (this.filterForm.valid) {
      this.search.emit(this.filterForm.valid);
    }
  }

  ngOnInit(): void {
  }

}
