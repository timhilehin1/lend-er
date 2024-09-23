import { Component, Input } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { SharedModule } from '../../../modules/shared/shared.module';
@Component({
  selector: 'app-success-modal',
  standalone: true,
  imports: [DialogModule, SharedModule],
  templateUrl: './success-modal.component.html',
  styleUrl: './success-modal.component.scss',
})
export class SuccessModalComponent {
  @Input() visible!: boolean;
  @Input() title!: string;
  @Input() subtitle!: string;
  @Input() url!: string;

  
}
