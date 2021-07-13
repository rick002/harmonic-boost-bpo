import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-manager',
  templateUrl: './admin-manager.component.html',
  styleUrls: ['./admin-manager.component.scss']
})
export class AdminManagerComponent implements OnInit {
  isError: boolean = false;
  downgrade: boolean = false;

  constructor(
    private fb: FormBuilder,
  ) { }

  roleManagerForm: FormGroup = this.fb.group({
    email: ['', Validators.required],
    isDowngrade: [''],
  });

  ngOnInit(): void {
    this.roleManagerForm.valueChanges.subscribe(
      ({ isDowngrade }) => this.downgrade = isDowngrade
    );
  }

}
