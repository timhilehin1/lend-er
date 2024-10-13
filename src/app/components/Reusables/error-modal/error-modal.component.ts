import { Component, Input, Output, EventEmitter } from '@angular/core';
import { SharedModule } from '../../../modules/shared/shared.module';
import { DialogModule } from 'primeng/dialog';

@Component({
  selector: 'app-error-modal',
  standalone: true,
  imports: [DialogModule, SharedModule],
  templateUrl: './error-modal.component.html',
  styleUrl: './error-modal.component.scss',
})
export class ErrorModalComponent {
  @Input() visible!: boolean;
  @Input() title!: string;
  @Input() subtitle!: string;

  @Output() closeModal: EventEmitter<boolean> = new EventEmitter<boolean>();

  handleClose() {
    this.closeModal.emit(false); // Emit 'false' when closing the modal
  }
}
