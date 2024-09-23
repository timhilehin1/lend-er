import { Component } from '@angular/core';
import { AuthLayoutComponent } from '../auth-layout/auth-layout.component';
import { SharedModule } from '../../../modules/shared/shared.module';
import { LogoComponent } from '../../landingPage/logo/logo.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { InputOtpModule } from 'primeng/inputotp';
import { SharedServiceService } from '../../../services/shared-service.service';
import { SuccessModalComponent } from '../../../components/Reusables/success-modal/success-modal.component';
import { DialogModule } from 'primeng/dialog';

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
    SuccessModalComponent,
    DialogModule,
  ],
  templateUrl: './otp-verification.component.html',
  styleUrl: './otp-verification.component.scss',
})
export class OtpVerificationComponent {
  successModalData: {
    isVerified: boolean;
    title: string;
    subtitle: string;
    url: string;
  } = {
    isVerified: false,
    title: 'Success!',
    subtitle: ' Your account has been successfully created',
    url: '/home',
  };
  constructor(private sharedService: SharedServiceService) {}
  value: any;
  onChange() {
    console.log(this.value);
  }

  onBack() {
    this.sharedService.goBack();
  }

  onSubmit() {
    this.successModalData.isVerified = true;
  }
}
