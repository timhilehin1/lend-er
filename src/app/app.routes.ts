import { Routes } from '@angular/router';
import { SignupComponent } from './pages/auth/signup/signup.component';
import { HomeComponent } from './pages/landingPage/home/home.component';
import { SelectAccountComponent } from './pages/auth/select-account/select-account.component';
import { OtpVerificationComponent } from './pages/auth/otp-verification/otp-verification.component';
import { RecordVerificationComponent } from './pages/auth/record-verification/record-verification.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { DashboardComponent } from './pages/personal/dashboard/dashboard.component';
import { LoanCalculatorComponent } from './pages/personal/loan-calculator/loan-calculator.component';
import { LoanApplicationComponent } from './pages/personal/loan-application/loan-application.component';
import { GuarantorComponent } from './pages/personal/guarantor/guarantor.component';
import { CreatePinComponent } from './pages/personal/Pin/create-pin/create-pin.component';
import { EnterPinComponent } from './pages/personal/Pin/enter-pin/enter-pin.component';
import { FundsTransferComponent } from './pages/personal/funds-transfer/funds-transfer.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'select-account', component: SelectAccountComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'otp-verification', component: OtpVerificationComponent },
  { path: 'record-verification', component: RecordVerificationComponent },
  { path: 'home', component: DashboardComponent },
  { path: 'login', component: LoginComponent },
  { path: 'loan-calculator', component: LoanCalculatorComponent },
  {
    path: 'loan-application',
    component: LoanApplicationComponent,
  },
  { path: 'loan-application/guarantor', component: GuarantorComponent },
  { path: 'create-pin', component: CreatePinComponent },
  { path: 'pin-verification', component: EnterPinComponent },
  { path: 'fund-transfer', component: FundsTransferComponent },
];
