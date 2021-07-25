import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertService } from 'src/app/harmonic-lib/utils/alert.util';
import { RolesManager } from '../../models/manager.model';
import { AdminManagerService } from '../../services/admin-manager.service';

@Component({
  selector: 'app-admin-manager',
  templateUrl: './admin-manager.component.html',
  styleUrls: ['./admin-manager.component.scss']
})
export class AdminManagerComponent implements OnInit {
  downgrade: boolean = false;
  alert: AlertService = new AlertService();

  constructor(
    private fb: FormBuilder,
    private adminManagerService: AdminManagerService,
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

  handleResponse(): void {
    this.alert.displaySuccessAlert('role updated');
  }

  handleFailure(info: any): void {
    this.alert.displayErrorAlert(info.error.message);
  }

  notTheSameUser(email: string): boolean {
    const user = this.adminManagerService.getUserInfo();
    return (user && user.email) !== email ? true : false;
  }

  updateRole(): void {
    const roleInfo: RolesManager = { token: '', email: '', role: '', };
    roleInfo.email = this.roleManagerForm.value.email;
    if (this.notTheSameUser(roleInfo.email)) {
      roleInfo.role = this.downgrade ? 'normal' : 'admin';
      this.adminManagerService.updateRole(roleInfo).subscribe(
        response => this.handleResponse(),
        err => this.handleFailure(err),
      );
    } else {
      this.alert.displayErrorAlert('you can not downgrade yourself');
    }
  }

  submit(): void {
    this.alert.displayLoadingAlert('loading...');
    if (this.roleManagerForm.valid) {
      this.updateRole();
    } else {
      this.alert.displayErrorAlert('email field requied');
    }
  }

}
