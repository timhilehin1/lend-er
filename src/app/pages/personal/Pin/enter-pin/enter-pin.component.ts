import { Component, Input, OnInit } from '@angular/core';
import { PersonalLayoutComponent } from '../../personal-layout/personal-layout.component';
import { SharedModule } from '../../../../modules/shared/shared.module';
import { ErrorModalComponent } from '../../../../components/Reusables/error-modal/error-modal.component';
import { SuccessModalComponent } from '../../../../components/Reusables/success-modal/success-modal.component';
import { SharedServiceService } from '../../../../services/shared-service.service';
import { OtpInputComponent } from '../../../../components/Reusables/otp-input/otp-input.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-enter-pin',
  standalone: true,
  imports: [
    PersonalLayoutComponent,
    SharedModule,
    ErrorModalComponent,
    SuccessModalComponent,
    OtpInputComponent,
  ],
  templateUrl: './enter-pin.component.html',
  styleUrl: './enter-pin.component.scss',
})
export class EnterPinComponent implements OnInit {
  constructor(
    private shared: SharedServiceService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  @Input() destinationUrl!: string;
  errorModalData: {
    isOpen: boolean;
    title: string;
    subtitle: string;
  } = {
    isOpen: false,
    title: 'Pins do not match',
    subtitle: 'Please ensure that your 6 digit Pin matches',
  };
  pin: string = '';
  destinationRoute: string = '';

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.destinationRoute = params['destination'];
    });
  }
  goBack() {
    this.shared.goBack();
  }
  closeErrorModal(status: boolean) {
    this.errorModalData.isOpen = status; // This will close the modal
  }

  onChange(newOtp: string) {
    this.pin = newOtp;
  }
  handleSubmit() {
    //if pin is successfule, show success modal and correct message with correct destination route
    if (this.destinationRoute === 'guarantor') {
      this.router.navigateByUrl('/loan-application/guarantor');
    }
    //pass a query to my url, so depending on the query should determine where my application shoute route too
  }
}
