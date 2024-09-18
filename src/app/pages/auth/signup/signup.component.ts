import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../../modules/shared/shared.module';
import { LogoComponent } from '../../landingPage/logo/logo.component';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { AuthLayoutComponent } from '../auth-layout/auth-layout.component';
import { Router } from '@angular/router';
import { PasswordRequirementComponent } from '../../../components/Reusables/password-requirement/password-requirement.component';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [
    SharedModule,
    LogoComponent,
    AuthLayoutComponent,
    PasswordRequirementComponent,
  ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss',
})
export class SignupComponent implements OnInit {
  registrationForm!: FormGroup;
  constructor(private fb: FormBuilder, private router: Router) {}
  ngOnInit(): void {
    this.registrationForm = this.fb.group(
      {
        firstName: [null, Validators.required],
        lastName: [null, Validators.required],
        email: [null, [Validators.required, Validators.email]],
        phoneNumber: [
          null,
          [Validators.required, Validators.pattern('^(\\+234|0)?[7-9]\\d{9}$')],
        ],
        password: [
          null,
          [
            Validators.required,
            Validators.pattern(
              /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{8,}$/
            ),
          ],
        ],
        confirmPassword: [null, [Validators.required]],
        bvn: [null, [Validators.required]],
        nin: [null, [Validators.required]],
      },
      { validators: this.confirmPasswordValidator }
    );
  }

  confirmPasswordValidator(control: AbstractControl): ValidationErrors | null {
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');
    if (password && confirmPassword) {
      if (password.value !== confirmPassword.value) {
        return {
          mismatch: true,
        };
      }
    }
    return null;
  }

  onSubmit() {
    // if (this.registrationForm.invalid) {
    //   this.registrationForm.markAllAsTouched();
    //   return;
    // }

    this.router.navigateByUrl('/otp-verification');
  }
}
