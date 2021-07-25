import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/harmonic-lib/utils/alert.util';
import { PasswordRecoveryService } from '../../services/password-recovery.service';

@Component({
  selector: 'app-recovery',
  templateUrl: './recovery.component.html',
  styleUrls: ['./recovery.component.scss']
})
export class RecoveryComponent implements OnInit {
  alert: AlertService = new AlertService();
  
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

  sendTokenByEmail(): void {
    if (this.recoveryForm.valid) {
      this.alert.displayLoadingAlert('sending recovery email');
      this.passwordRecoveryService.sendRecoveryEmail(this.recoveryForm.value).subscribe(
        response => this.openUpdatePassword(),
        err => this.handleError(err),
      );
    }
  }

  openUpdatePassword(): void {
    this.alert.displaySuccessAlert('recovery email sent');
    this.router.navigate(['/password']);
  }

  handleError(info: any): void {
    this.alert.displayErrorAlert(info?.error?.message || 'action failed');
    
  }

}
