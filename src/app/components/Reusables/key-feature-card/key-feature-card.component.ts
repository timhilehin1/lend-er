import { Component, Input } from '@angular/core';
import { SharedModule } from '../../../modules/shared/shared.module';
@Component({
  selector: 'app-key-feature-card',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './key-feature-card.component.html',
  styleUrl: './key-feature-card.component.scss'
})
export class KeyFeatureCardComponent {
  @Input() icon!:string;
  @Input() color!:string;
  @Input() title!:string;
  @Input() subTitle!:string
}
