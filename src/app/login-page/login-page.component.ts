import {Component, OnInit} from '@angular/core';
import {AuthService} from "../shared/auth.service";
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {AppService} from "../app.service";

@Component({
  selector: 'at-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private service : AppService,
    private authService:AuthService) {}

  ngOnInit() {
    this.authService.signOut();

    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onLogin() {
    this.authService.signInWithCredentials(this.loginForm.value);
  }
  onGoogle() {
    this.authService.signInWithGoogle()
  }
  onFacebook() {
    this.authService.signInWithFacebook()
  }
}
