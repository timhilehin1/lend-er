import { Component } from '@angular/core';
import { SharedModule } from '../../../modules/shared/shared.module';
import { LogoComponent } from '../../landingPage/logo/logo.component';

@Component({
  selector: 'app-auth-layout',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './auth-layout.component.html',
  styleUrl: './auth-layout.component.scss',
})
export class AuthLayoutComponent {}
