import { Component } from '@angular/core';
import { PersonalLayoutComponent } from '../../personal-layout/personal-layout.component';
import { SharedModule } from '../../../../modules/shared/shared.module';
import { SharedServiceService } from '../../../../services/shared-service.service';
import { OtpInputComponent } from '../../../../components/Reusables/otp-input/otp-input.component';
import { ErrorModalComponent } from '../../../../components/Reusables/error-modal/error-modal.component';
import { Router } from '@angular/router';
import { SuccessModalComponent } from '../../../../components/Reusables/success-modal/success-modal.component';

@Component({
  selector: 'app-create-pin',
  standalone: true,
  imports: [
    PersonalLayoutComponent,
    SharedModule,
    OtpInputComponent,
    ErrorModalComponent,
    SuccessModalComponent,
  ],
  templateUrl: './create-pin.component.html',
  styleUrl: './create-pin.component.scss',
})
export class CreatePinComponent {
  errorModalData: {
    isOpen: boolean;
    title: string;
    subtitle: string;
  } = {
    isOpen: false,
    title: 'Pins do not match',
    subtitle: 'Please ensure that your 6 digit Pin matches',
  };

  successModalData: {
    isVerified: boolean;
    title: string;
    subtitle: string;
    url: string;
  } = {
    isVerified: false,
    title: 'Success!',
    subtitle: ' Your pin has been successfully created',
    url: '/home',
  };
  constructor(private shared: SharedServiceService, private router: Router) {}
  //implement that stuff that providus did, for pin safety, get an array of popular pins and check against it
  pin: any;
  confirmPin: string = '';
  onChange(newOtp: string) {
    this.pin = newOtp;
  }

  onConfirmPin(newOtp: string) {
    this.confirmPin = newOtp;
  }

  goBack() {
    this.shared.goBack();
  }

  handleSubmit() {
    console.log('pin--', this.pin);
    console.log('confirm-pin', this.confirmPin);
    if (this.pin === this.confirmPin) {
      this.successModalData.isVerified = true;
      sessionStorage.setItem('auth', JSON.stringify({ createdPin: true }));
    } else {
      this.errorModalData.isOpen = true;
      // open succcess modal
      // this.router.navigateByUrl('loan/application')
    }
  }

  closeErrorModal(status: boolean) {
    this.errorModalData.isOpen = status; // This will close the modal
  }
}
