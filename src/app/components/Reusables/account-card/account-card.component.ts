import { Component, Input } from '@angular/core';
import { SharedModule } from '../../../modules/shared/shared.module';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-account-card',
  standalone: true,
  imports: [SharedModule, CurrencyPipe],
  templateUrl: './account-card.component.html',
  styleUrl: './account-card.component.scss',
})
export class AccountCardComponent {
  @Input() url!: string;
  @Input() title!: string;
  @Input() amount!: string;
  @Input() actionText!: string;
  @Input() color!: string;
}
