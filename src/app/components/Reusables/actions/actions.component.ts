import { Component} from '@angular/core';
import { SharedModule } from '../../../modules/shared/shared.module';
import { ActionCardComponent } from '../action-card/action-card.component';

@Component({
  selector: 'app-actions',
  standalone: true,
  imports: [SharedModule, ActionCardComponent],
  templateUrl: './actions.component.html',
  styleUrl: './actions.component.scss',
  
})
export class ActionsComponent {
  actiondata: {
    id: number;
    icon: string;
    text: string;
    url: string;
    color: string;
  }[] = [
    {
      icon: '/assets/icons/loanApplication.svg',
      text: 'Loan Application',
      url: '/loan-application',
      color: '#DDEBFF',
      id: 1,
    },
    {
      icon: '/assets/icons/loanCalculator.svg',
      text: 'Loan Calculator',
      url: '/loan-calculator',
      color: '#FFE0E0',
      id: 2,
    },
    {
      icon: '/assets/icons/fundsTransfer.svg',
      text: 'Funds Transfer',
      url: '/fund-transfer',
      color: '#E5FFE3',
      id: 3,
    },
    {
      icon: '/assets/icons/history.svg',
      text: 'Transaction History',
      url: '/transaction-history',
      color: '#FFF6C8',
      id: 4,
    },
  ];
}
