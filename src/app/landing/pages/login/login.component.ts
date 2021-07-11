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

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private authService: AuthService
  ) {}

  loginForm: FormGroup = this.fb.group({
    email: ['', [Validators.required]],
    password: ['', [Validators.required]],
  });

  ngOnInit(): void {}

  handleLogin(response: any): void {
    console.log(response);
    if (response && response.loggedIn) {
      this.authService.setTokenInfo(response);
      this.router.navigate(['/admin']);
    } else {
      this.isError = true;
    }
  }

  handleError(info: any): void {
    console.log(info);
    if (info) {
      this.isError = true;
    }
  }

  login(): void {
    this.isError = false;
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value as User).subscribe(
        (response) => this.handleLogin(response),
        (err) => this.handleError(err),
      );
    }
  }
}
