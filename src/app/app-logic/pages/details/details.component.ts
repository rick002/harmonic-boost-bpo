import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { DEFAULT_FULL_USER, UserToSignup } from 'src/app/landing/models/user.model';
import { AuthService } from 'src/app/landing/services/auth.service';
import { DEFAULT_POSITION, Position, PositionsForm } from '../../models/positions-form.model';
import { PositionService } from '../../services/position.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  positionsForm: PositionsForm = {
    title: 'details of this position',
    buttonLabel: 'update this position',
    isCreate: false,
    isDetails: true,
    isRemoveButtonVisible: false,
  };

  userInfo: UserToSignup = DEFAULT_FULL_USER;
  username: string = 'Admin User';

  isVisible: boolean = false;
  successAlert: boolean = false;
  loadingAlert: boolean = false;
  failAlert: boolean = false;

  message: string = 'executing task...';

  displayForm: boolean = false;
  positionId: string = '';

  constructor(
    private route: ActivatedRoute,
    private authService: AuthService,
    private positionService: PositionService,
  ) { }

 

  ngOnInit(): void {
    this.userInfo = this.authService.getUserInfo();
    this.username = this.getFullName();
    this.route.params.subscribe(({ positionId }) => this.positionId = positionId);
  }

  getFullName(): string {
    return `${this.userInfo.firstName} ${this.userInfo.lastName}`;
  }

  handleResponse(response: any): void {
    this.failAlert = false;
    this.loadingAlert = false;
    this.successAlert = true;
    this.message = response.message || 'action performed';
    this.isVisible = true;
  }

  handleFailure(info: any): void {
    this.failAlert = true;
    this.loadingAlert = false;
    this.successAlert = false;
    this.message = info?.error?.message || 'there was a problem during this process';
    this.isVisible = true;
  
  }

  displayLoadingAlert(message: string): void {
    this.loadingAlert = true;
    this.isVisible = true;
    this.message = message;
  }

  updatePosition(position: Position): void {
    this.displayLoadingAlert('updating position...');
    if (position) {
      this.positionService.editPosition(position).subscribe(
        response => this.handleResponse(response),
        err => this.handleFailure(err),
      );
    }
  }

  deletePosition(positionId: string): void {
    this.displayLoadingAlert('deleting position...');
    if (positionId) {
      this.positionService.deletePosition(positionId).subscribe(
        response => this.handleResponse(response),
        err => this.handleFailure(err),
      );
    }
  }

}
