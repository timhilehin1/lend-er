import { Component, OnInit } from '@angular/core';
import { PersonalLayoutComponent } from '../personal-layout/personal-layout.component';
import { SharedModule } from '../../../modules/shared/shared.module';
import { SharedServiceService } from '../../../services/shared-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loan-application',
  standalone: true,
  imports: [PersonalLayoutComponent, SharedModule],
  templateUrl: './loan-application.component.html',
  styleUrl: './loan-application.component.scss',
})
export class LoanApplicationComponent implements OnInit {
  applicationForm!: FormGroup;
  constructor(
    private shared: SharedServiceService,
    private fb: FormBuilder,
    private router: Router
  ) {}
  goBack() {
    this.shared.goBack();
  }

  ngOnInit(): void {
    this.applicationForm = this.fb.group({
      loanType: [null, Validators.required],
      amount: [{ value: null, disabled: true }, Validators.required],
      returnAmount: [{ value: null, disabled: true }, Validators.required],
      loanTerm: [{ value: null, disabled: true }, Validators.required],
      purpose: [null],
      interest: [{ value: null, disabled: true }, Validators.required],
    });
  }

  onSubmit() {
    let pinStatus = this.shared.getSessionData();
    if (pinStatus && pinStatus.createdPin) {
      //if the user has set up his/her pin
      this.router.navigateByUrl('/loan-application/guarantor');
    } else {
      this.router.navigateByUrl('/create-pin');
    }
  }
}
