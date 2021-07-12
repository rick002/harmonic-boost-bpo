import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-pass',
  templateUrl: './edit-pass.component.html',
  styleUrls: ['./edit-pass.component.scss']
})
export class EditPassComponent implements OnInit {
  isError: boolean = false;
  
  constructor(
    private fb: FormBuilder,
  ) { }

  editPassForm: FormGroup = this.fb.group({
    newPassword: ['', Validators.required],
    confirmationPassword: ['', Validators.required],
  });

  ngOnInit(): void {
  }

}
