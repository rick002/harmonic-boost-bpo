import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PasswordRecoveryService } from '../../services/password-recovery.service';

@Component({
  selector: 'app-edit-pass',
  templateUrl: './edit-pass.component.html',
  styleUrls: ['./edit-pass.component.scss']
})
export class EditPassComponent implements OnInit {
  isVisible: boolean = false;
  successAlert: boolean = false;
  loadingAlert: boolean = false;
  failAlert: boolean = false;

  message: string = 'sending recovery email...';
  
  constructor(
    private fb: FormBuilder,
    private passwordRecoverySerivce: PasswordRecoveryService,
  ) { }

  editPassForm: FormGroup = this.fb.group({
    newPassword: ['', Validators.required],
    confirmationPassword: ['', Validators.required],
    token: ['', Validators.required],
  });

  ngOnInit(): void {
  }

  resetValues(values: any): void {
    this.isVisible = false;
    this.loadingAlert = false;
    this.successAlert = false;
    this.failAlert = false;
  }

  displayErrorAlert(message: string): void {
    this.loadingAlert = false;
    this.successAlert = false;
    this.failAlert = true;
    this.isVisible = true;
    this.message = message;
  }

  displayLoadingAlert(message: string): void {
    this.isVisible = true;
    this.loadingAlert = true;
    this.failAlert = false;
    this.successAlert = false;
    this.message = message;
  }

  displaySuccessAlert(message: string): void {
    this.loadingAlert = false;
    this.failAlert = false;
    this.successAlert = true;
    this.isVisible = true;
    this.message = message;
  }

  updatePasswordByToken(): void {
    if (this.editPassForm.valid) {
      this.displayLoadingAlert('updating the password...');
      this.passwordRecoverySerivce.changePassword(this.editPassForm.value).subscribe(
        response => this.handleResponse(response),
        err => this.handleError(err),
      );
    } else {
      this.displayErrorAlert('all fields required.');
    }
  }

  handleResponse(response: any): void {
    this.displaySuccessAlert('password updated');
  }

  handleError(info: any): void {
    this.displayErrorAlert(info?.error?.message);
  }


}
