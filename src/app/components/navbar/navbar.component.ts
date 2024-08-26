import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { LogoComponent } from '../logo/logo.component';
import { SharedModule } from '../../modules/shared/shared.module';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [LogoComponent, SharedModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  isOpen: boolean = false;
  toggleMenu = () => {
    this.isOpen = !this.isOpen;
  };
}
