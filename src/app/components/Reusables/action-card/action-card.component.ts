import { Component, Input } from '@angular/core';
import { SharedModule } from '../../../modules/shared/shared.module';

@Component({
  selector: 'app-action-card',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './action-card.component.html',
  styleUrl: './action-card.component.scss',
})
export class ActionCardComponent {
  @Input() icon!: string;
  @Input() text!: string;
  @Input() url!: string;
  @Input() color!: string;
}
