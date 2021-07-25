import { Component, OnInit } from '@angular/core';
import { AlertService } from 'src/app/harmonic-lib/utils/alert.util';
import { DEFAULT_FULL_USER, UserToSignup } from 'src/app/landing/models/user.model';
import { AuthService } from 'src/app/landing/services/auth.service';
import { Position, PositionsForm } from '../../models/positions-form.model';
import { PositionService } from '../../services/position.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  positionsForm: PositionsForm = {
    title: 'create a new position',
    buttonLabel: 'post this new job',
    isCreate: true,
    isDetails: false,
    isRemoveButtonVisible: false,
  };

  userInfo: UserToSignup = DEFAULT_FULL_USER;
  username: string = 'Admin User';


  alertService: AlertService = new AlertService();

  constructor(
    private authService: AuthService,
    private positionService: PositionService,
  ) { }

  getFullName(): string {
    return `${this.userInfo.firstName} ${this.userInfo.lastName}`;
  }

  ngOnInit(): void {
    this.userInfo = this.authService.getUserInfo();
    this.username = this.getFullName();
  }

  handleResponse(response: any): void {
    this.alertService.displaySuccessAlert('position created');
  }

  handleFailure(info: any): void {
    this.alertService.displayLoadingAlert(info?.error?.message);
  }

  createPosition(position: Position): void {
    this.alertService.displayLoadingAlert('trying to create this position...');
    if (position) {
      this.positionService.createPosition(position).subscribe(
        response => this.handleResponse(response),
        err => this.handleFailure(err),
      )
    }
  }

}
