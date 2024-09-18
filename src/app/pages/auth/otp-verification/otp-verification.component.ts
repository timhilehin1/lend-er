import { Component } from '@angular/core';
import { AuthLayoutComponent } from '../auth-layout/auth-layout.component';
import { SharedModule } from '../../../modules/shared/shared.module';
import { LogoComponent } from '../../landingPage/logo/logo.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { InputOtpModule } from 'primeng/inputotp';

@Component({
  selector: 'app-otp-verification',
  standalone: true,
  imports: [
    AuthLayoutComponent,
    SharedModule,
    LogoComponent,
    InputOtpModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  templateUrl: './otp-verification.component.html',
  styleUrl: './otp-verification.component.scss',
})
export class OtpVerificationComponent {
  value: any;
  onChange(event: Event) {
    const input = event.target as HTMLInputElement;
    console.log('New OTP value:', input);
    // Perform any additional actions with the new value
  }
}
