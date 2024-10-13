import { Component, Input } from '@angular/core';
import { SharedModule } from '../../../modules/shared/shared.module';

@Component({
  selector: 'app-history-card',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './history-card.component.html',
  styleUrl: './history-card.component.scss',
})
export class HistoryCardComponent {
  @Input() amount?: string;
  @Input() type?: string;
  @Input() name?: string;
  @Input() date?: string;
}
