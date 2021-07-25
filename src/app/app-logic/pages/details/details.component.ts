import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AlertService } from 'src/app/harmonic-lib/utils/alert.util';
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

  alertService: AlertService = new AlertService();

  constructor(
    private router: Router,
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

  handleUpdateResponse(response: any): void {
    this.alertService.displaySuccessAlert('position updated');
    this.router.navigate(['/careers']);
  }
  
  handleDeleteResponse(response: any): void {
    this.alertService.displaySuccessAlert('position deleted');
    this.router.navigate(['/careers']);
  }

  handleFailure(info: any): void {
    this.alertService.displayErrorAlert(info?.error?.message)
  }

  updatePosition(position: Position): void {
    this.alertService.displayLoadingAlert('updating position...');
    if (position) {
      this.positionService.editPosition(position).subscribe(
        response => this.handleUpdateResponse(response),
        err => this.handleFailure(err),
      );
    }
  }

  deletePosition(positionId: string): void {
    this.alertService.displayLoadingAlert('deleting position...');
    if (positionId) {
      this.positionService.deletePosition(positionId).subscribe(
        response => this.handleDeleteResponse(response),
        err => this.handleFailure(err),
      );
    }
  }

}
