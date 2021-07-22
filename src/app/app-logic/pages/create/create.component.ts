import { Component, OnInit } from '@angular/core';
import { DEFAULT_FULL_USER, UserToSignup } from 'src/app/landing/models/user.model';
import { AuthService } from 'src/app/landing/services/auth.service';
import { PositionsForm } from '../../models/positions-form.model';

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

  constructor(
    private authService: AuthService,
  ) { }

  getFullName(): string {
    return `${this.userInfo.firstName} ${this.userInfo.lastName}`;
  }

  ngOnInit(): void {
    this.userInfo = this.authService.getUserInfo();
    this.username = this.getFullName();
    console.log(this.userInfo);
  }

}
