import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../../models/user.model';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  isError: boolean = false;
  errorMessage: string = '';

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private authService: AuthService
  ) {}

  loginForm: FormGroup = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  });

  ngOnInit(): void {}


  handleLogin(response: any): void {
    if (response && response.loggedIn) {
      this.authService.setTokenInfo(response);
      this.authService.roleBasedRedirection();
    } else {
      this.handleError(response);
    }
  }

  handleError(info: any): void {
    if (!info?.loggedIn) {
      this.errorMessage = info?.message;
      this.isError = true;
    }
  }

  closeErrorAlert(): void {
    this.errorMessage = '';
    this.isError = false;
  }

  login(): void {
    this.isError = false;
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value as User).subscribe(
        (response) => this.handleLogin(response),
        (err) => this.handleError(err),
      );
    } else {
      this.errorMessage = 'all fields required';
      this.isError = true;
    }
  }
}
