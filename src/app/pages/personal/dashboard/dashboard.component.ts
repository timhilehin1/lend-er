import { Component } from '@angular/core';
import { NavbarComponent } from '../../../components/Reusables/navbar/navbar.component';
import { AccountDetailsComponent } from '../../../components/Reusables/account-details/account-details.component';
import { ActionsComponent } from '../../../components/Reusables/actions/actions.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NavbarComponent, AccountDetailsComponent, ActionsComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {}
