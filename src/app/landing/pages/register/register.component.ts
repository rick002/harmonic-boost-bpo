import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserToSignup } from '../../models/user.model';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  isError: boolean = false;
  message: string = 'trying to sign up...';

  isVisible: boolean = false;
  successAlert: boolean = false;
  loadingAlert: boolean = false;
  failAlert: boolean = false;  

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
  ) { }

  signUpForm: FormGroup = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    phoneNumber: ['', Validators.required],
    password: ['', Validators.required],
    confirmPassword: ['', Validators.required],
  });

  resetValues(values: any): void {
    this.isVisible = false;
    this.loadingAlert = false;
    this.successAlert = false;
    this.failAlert = false;
  }

  handleError(info: any): void {
    this.message = info?.error?.message;
    this.loadingAlert = false;
    this.successAlert = false;
    this.failAlert = true;
    this.isVisible = true;
  }

  handleSignUp(response: any): void {
    if (response && response.loggedIn) {
      this.loadingAlert = false;
      this.failAlert = false;
      this.successAlert = true;
      this.message = 'user signed up';
      this.authService.setTokenInfo(response);
      this.authService.roleBasedRedirection();
    } else {
      this.handleError(response);
    }
  }

  signUp(): void {
    if (this.signUpForm.valid) {
      this.isVisible = true;
      this.loadingAlert = true;
      this.failAlert = false;
      this.message = 'trying to signup...';
      console.log(this.signUpForm.value as UserToSignup);
      this.authService.signUp(this.signUpForm.value as UserToSignup).subscribe(
        response => this.handleSignUp(response),
        error => this.handleError(error),
      );
    } else {
      this.message = 'all fields required';
      this.loadingAlert = false;
      this.failAlert = true;
      this.isVisible = true;
    }
  }

  ngOnInit(): void {
  }


}
