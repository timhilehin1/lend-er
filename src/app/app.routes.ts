import { Routes } from '@angular/router';
import { SignupComponent } from './pages/auth/signup/signup.component';
import { HomeComponent } from './pages/landingPage/home/home.component';
import { SelectAccountComponent } from './pages/auth/select-account/select-account.component';
import { OtpVerificationComponent } from './pages/auth/otp-verification/otp-verification.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'select-account', component: SelectAccountComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'otp-verification', component: OtpVerificationComponent },
];
