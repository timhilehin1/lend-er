import { CurrencyPipe } from '@angular/common';
import { Component } from '@angular/core';
import { AccountCardComponent } from '../account-card/account-card.component';

@Component({
  selector: 'app-account-details',
  standalone: true,
  imports: [CurrencyPipe, AccountCardComponent],
  templateUrl: './account-details.component.html',
  styleUrl: './account-details.component.scss',
})
export class AccountDetailsComponent {
  accountCardsData = [
    {
      url: 'fund-account',
      title: 'Wallet balance',
      amount: '10000',
      actionText: 'Fund your account',
      color: '#FFECEB',
    },
    {
      url: 'pay-off',
      title: 'Outstanding loan',
      amount: '5000',
      actionText: 'Pay off Loan',
      color: '#F3F0FF',
    },
    {
      url: 'view-current-loan',
      title: 'Monthly repayment',
      amount: '6000',
      actionText: 'View Current Loan',
      color: '#E7F9FF',
    },
  ];
}
