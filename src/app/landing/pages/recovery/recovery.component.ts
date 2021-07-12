import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-recovery',
  templateUrl: './recovery.component.html',
  styleUrls: ['./recovery.component.scss']
})
export class RecoveryComponent implements OnInit {
  isError: boolean = false;

  constructor(
    private fb: FormBuilder,
  ) { }

  recoveryForm: FormGroup = this.fb.group({
    email: ['', Validators.required],
  });

  ngOnInit(): void {
  }

}
