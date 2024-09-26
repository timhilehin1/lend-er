import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../../modules/shared/shared.module';
import { PersonalLayoutComponent } from '../personal-layout/personal-layout.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-loan-calculator',
  standalone: true,
  imports: [SharedModule, PersonalLayoutComponent],
  templateUrl: './loan-calculator.component.html',
  styleUrl: './loan-calculator.component.scss',
})
export class LoanCalculatorComponent implements OnInit {
  calculatorForm!: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.calculatorForm = this.fb.group({
      amount: [null, Validators.required],
      loanType: [null, Validators.required],
      loanDesciption: [{ value: null, disabled: true }, Validators.required],
      loanTerm: [{ value: null, disabled: true }, Validators.required],
    });
  }
  onSubmit() {}
}
