import { Component } from '@angular/core';
import { SharedModule } from '../../../modules/shared/shared.module';
import { KeyFeatureCardComponent } from '../../../components/Reusables/key-feature-card/key-feature-card.component';

@Component({
  selector: 'app-why-us',
  standalone: true,
  imports: [SharedModule, KeyFeatureCardComponent],
  templateUrl: './why-us.component.html',
  styleUrl: './why-us.component.scss',
})
export class WhyUsComponent {
  keyFeatures: any[] = [
    {
      id: 1,
      icon: 'assets/icons/flexibleLoanOptions.svg',
      title: 'Tailored to Your Needs',
      subTitle:
        ' Flexible loan options designed to fit every borrower’s unique situation.',
      color: '#E9F2FF',
    },
    {
      id: 2,
      icon: 'assets/icons/riskManagement.svg',
      title: 'Risk-Free Returns',
      subTitle:
        'Advanced risk management tools that keep your lending safe and secure.',
      color: '#F3F0FF',
    },
    {
      id: 3,
      icon: 'assets/icons/ux.svg',
      title: 'Smooth Sailing',
      subTitle:
        'An intuitive, user-friendly experience from application to approval.',
      color: '#E7F9FF',
    },
    {
      id: 4,
      icon: 'assets/icons/disbursement.svg',
      title: 'Lightning-Fast Funding',
      subTitle:
        ' Quick disbursement and hassle-free repayment options, ensuring efficient transactions.',
      color: '#FFECEB',
    },
  ];
}
