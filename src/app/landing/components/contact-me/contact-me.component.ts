import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Message } from '../../models/message.model';
import { ContactUsService } from '../../services/contact-us.service';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss']
})
export class ContactMeComponent implements OnInit {
  message: string = 'sending message...';
  isVisible: boolean = false;
  successAlert: boolean = false;
  loadingAlert: boolean = false;
  failAlert: boolean = false;

  constructor(
    private contactService: ContactUsService,
    private fb: FormBuilder,
  ) { }

  contactForm: FormGroup = this.fb.group({
    name: ['', Validators.required],
    lastName: ['', Validators.required],
    phone: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    message: ['', Validators.required],
  });

  ngOnInit(): void {
  }

  handleResponse(response: any): void {
    this.message = response.message;
    this.loadingAlert = false;
    this.failAlert = false;
    this.isVisible = true;
    this.successAlert = true;
  }

  resetValues(values: any): void {
    this.isVisible = false;
    this.loadingAlert = false;
    this.successAlert = false;
    this.failAlert = false;
  }

  handleError(info: any): void {
    this.loadingAlert = false;
    this.successAlert = false;
    this.message = info?.error?.message || 'unable to send the email.';
    this.failAlert = true;
    console.log(info);
  }

  contactUs(): void {
    this.failAlert = false;
    if (this.contactForm.valid) {
      this.isVisible = true;
      this.loadingAlert = true;
      this.message = 'sending message...';
      this.contactService.sendContactMessage(this.contactForm.value as Message).subscribe(
        response => this.handleResponse(response),
        err => this.handleError(err)
      );
    } else {
      this.message = 'All fields required';
      this.failAlert = true;
      this.isVisible = true;
    }
  }

}
