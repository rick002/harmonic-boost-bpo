import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PasswordRecoveryService } from '../../services/password-recovery.service';

@Component({
  selector: 'app-recovery',
  templateUrl: './recovery.component.html',
  styleUrls: ['./recovery.component.scss']
})
export class RecoveryComponent implements OnInit {
  

  isVisible: boolean = false;
  successAlert: boolean = false;
  loadingAlert: boolean = false;
  failAlert: boolean = false;

  message: string = 'sending recovery email...';

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private passwordRecoveryService: PasswordRecoveryService,
  ) { }

  recoveryForm: FormGroup = this.fb.group({
    email: ['', Validators.required],
  });



  ngOnInit(): void {
  }

  resetValues(values: any): void {
    this.isVisible = false;
    this.loadingAlert = false;
    this.successAlert = false;
    this.failAlert = false;
  }

  displayLoadingAlert(): void {
    this.isVisible = true;
    this.loadingAlert = true;
    this.failAlert = false;
    this.successAlert = false;
  }

  displaySuccessAlert(): void {
    this.loadingAlert = false;
    this.failAlert = false;
    this.successAlert = true;
    this.isVisible = true;
    this.message = 'recovery sent';
  }

  sendTokenByEmail(): void {
    if (this.recoveryForm.valid) {
      this.displayLoadingAlert();
      this.passwordRecoveryService.sendRecoveryEmail(this.recoveryForm.value).subscribe(
        response => this.openUpdatePassword(),
        err => this.handleError(err),
      );
    }
  }

  openUpdatePassword(): void {
    this.displaySuccessAlert();
    this.router.navigate(['/password']);
  }

  handleError(info: any): void {
    this.message = info?.error?.message;
    this.loadingAlert = false;
    this.successAlert = false;
    this.failAlert = true;
    this.isVisible = true;
  }

}
