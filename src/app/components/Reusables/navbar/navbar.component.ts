import { Component } from '@angular/core';
import { LogoComponent } from '../../../pages/landingPage/logo/logo.component';
import { SharedModule } from '../../../modules/shared/shared.module';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [LogoComponent, SharedModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {}
