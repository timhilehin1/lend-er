import { Component } from '@angular/core';
import { AccountDetailsComponent } from '../../../components/Reusables/account-details/account-details.component';
import { ActionsComponent } from '../../../components/Reusables/actions/actions.component';
import { PersonalLayoutComponent } from '../personal-layout/personal-layout.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [AccountDetailsComponent, ActionsComponent, PersonalLayoutComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {}
