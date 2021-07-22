import { Component, OnInit } from '@angular/core';
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
    isUpdate: false,
    isRemoveButtonVisible: false,
  };

  userInfo: UserToSignup = DEFAULT_FULL_USER;
  username: string = 'Admin User';

  isVisible: boolean = false;
  successAlert: boolean = false;
  loadingAlert: boolean = false;
  failAlert: boolean = false;

  message: string = 'executing task...';

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
    console.log(response);
    this.failAlert = false;
    this.loadingAlert = false;
    this.successAlert = true;
    this.message = response.message || 'position created';
    this.isVisible = true;
  }

  handleFailure(info: any): void {
    console.log(info);
    this.failAlert = true;
    this.loadingAlert = false;
    this.successAlert = false;
    this.message = info?.error?.message || 'there was a problem during the position creation';
    this.isVisible = true;
  }

  createPosition(position: Position): void {
    this.loadingAlert = true;
    this.isVisible = true;
    this.message = 'creating position...';
    if (position) {
      this.positionService.createPosition(position).subscribe(
        response => this.handleResponse(response),
        err => this.handleFailure(err),
      )
    }
  }

}
