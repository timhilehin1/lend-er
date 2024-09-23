import { Component, OnInit } from '@angular/core';
import { AuthLayoutComponent } from '../auth-layout/auth-layout.component';
import { SharedModule } from '../../../modules/shared/shared.module';
import { LogoComponent } from '../../landingPage/logo/logo.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [AuthLayoutComponent, SharedModule, LogoComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  inputType: string = 'password';

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, Validators.required],
    });
  }

  togglePassword() {
    if (this.inputType === 'password') {
      this.inputType = 'text';
    } else if (this.inputType === 'text') {
      this.inputType = 'password';
    }
  }
  onSubmit() {
    console.log(this.loginForm.value);
    this.router.navigateByUrl('/home');
  }
}
