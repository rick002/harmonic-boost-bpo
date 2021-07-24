import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../../models/user.model';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  isVisible: boolean = false;
  successAlert: boolean = false;
  loadingAlert: boolean = false;
  failAlert: boolean = false;

  message: string = 'trying to login...';

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
  ) { }

  loginForm: FormGroup = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  });

  ngOnInit(): void { }

  handleLogin(response: any): void {
    if (response && response.loggedIn) {
      this.loadingAlert = false;
      this.failAlert = false;
      this.successAlert = true;
      this.message = 'user logged in';
      this.authService.setTokenInfo(response);
      this.authService.roleBasedRedirection();
    } else {
      this.handleError(response);
    }
  }

  handleError(info: any): void {
    this.message = info?.error?.message;
    this.loadingAlert = false;
    this.successAlert = false;
    this.failAlert = true;
    this.isVisible = true;
  }

  resetValues(values: any): void {
    this.isVisible = false;
    this.loadingAlert = false;
    this.successAlert = false;
    this.failAlert = false;
  }


  login(): void {
    if (this.loginForm.valid) {
      this.isVisible = true;
      this.loadingAlert = true;
      this.failAlert = false;
      this.message = 'trying to login...';
      this.authService.login(this.loginForm.value as User).subscribe(
        (response) => this.handleLogin(response),
        (err) => this.handleError(err),
      );
    } else {
      this.message = 'all fields required';
      this.loadingAlert = false;
      this.failAlert = true;
      this.isVisible = true;
    }
  }
}
