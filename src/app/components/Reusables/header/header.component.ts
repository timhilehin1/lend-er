import { Component } from '@angular/core';
import { LogoComponent } from '../../../pages/landingPage/logo/logo.component';
import { SharedModule } from '../../../modules/shared/shared.module';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [LogoComponent, SharedModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
