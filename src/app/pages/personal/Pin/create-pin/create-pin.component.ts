import { Component } from '@angular/core';
import { PersonalLayoutComponent } from '../../personal-layout/personal-layout.component';
import { SharedModule } from '../../../../modules/shared/shared.module';
import { SharedServiceService } from '../../../../services/shared-service.service';
import { OtpInputComponent } from '../../../../components/Reusables/otp-input/otp-input.component';
import { InputOtpModule } from 'primeng/inputotp';

@Component({
  selector: 'app-create-pin',
  standalone: true,
  imports: [PersonalLayoutComponent, SharedModule, OtpInputComponent, InputOtpModule],
  templateUrl: './create-pin.component.html',
  styleUrl: './create-pin.component.scss',
})
export class CreatePinComponent {
  value: any;
  onChange() {
    console.log(this.value);
  }
  constructor(private shared: SharedServiceService) {}
  goBack() {
    this.shared.goBack();
  }
}
