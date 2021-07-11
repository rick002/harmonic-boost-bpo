import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User, UserToSignup } from '../../models/user.model';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  isError: boolean = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService,
  ) { }

  signUpForm: FormGroup = this.fb.group({
    name: ['', [Validators.required]],
    lastName: ['', [Validators.required]],
    email: ['', [Validators.required]],
    phoneNumber: ['', [Validators.required]],
    password: ['', [Validators.required]],
    confirmPassword: ['', [Validators.required]],
  });

  handleError(error: any): void {
    if (error) {
      this.isError = true;
    }
  }

  handleSignUp(response: any): void {
    if (response && response.loggedIn) {
      this.authService.setTokenInfo(response);
      this.router.navigate(['/admin']);
    }
  }

  signUp(): void {
    if (this.signUpForm.valid) {
      console.log(this.signUpForm.value);
      this.authService.signUp(this.signUpForm.value as UserToSignup).subscribe(
        response => this.handleSignUp(response),
        error => this.handleError(error),
      );
    }
  }

  ngOnInit(): void {
  }


}
