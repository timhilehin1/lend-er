import { Component, Input } from '@angular/core';
import { SharedModule } from '../../../modules/shared/shared.module';

@Component({
  selector: 'app-reviews-card',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './reviews-card.component.html',
  styleUrl: './reviews-card.component.scss',
})
export class ReviewsCardComponent {
  @Input() date!: string;
  @Input() reviewerName!:string;
  @Input() reviewerInitials!:string;
  @Input() content!:string;
}
