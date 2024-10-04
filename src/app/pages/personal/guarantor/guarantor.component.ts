import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SharedModule } from '../../../modules/shared/shared.module';
import { SharedServiceService } from '../../../services/shared-service.service';
import { PersonalLayoutComponent } from '../personal-layout/personal-layout.component';

@Component({
  selector: 'app-guarantor',
  standalone: true,
  imports: [PersonalLayoutComponent, SharedModule],
  templateUrl: './guarantor.component.html',
  styleUrl: './guarantor.component.scss',
})
export class GuarantorComponent implements OnInit {
  guarantorForm!: FormGroup;
  constructor(private shared: SharedServiceService, private fb: FormBuilder) {}
  goBack() {
    this.shared.goBack();
  }

  companyName: string = 'Brinte';

  ngOnInit(): void {
    this.guarantorForm = this.fb.group({
      firstName: [null, Validators.required],
      lastName: [null, Validators.required],
      phoneNumber: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      residentialAddress: [null, Validators.required],
      relationship: [null, Validators.required],
      guarantorNin: [null, Validators.required],
      guarantorIncome: [null, Validators.required],
      termsAndCondition: [null, Validators.required],
    });
  }

  onSubmit() {
    this.guarantorForm.markAllAsTouched();
  }
}
