import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputOtpModule } from 'primeng/inputotp';

@Component({
  selector: 'app-otp-input',
  standalone: true,
  imports: [InputOtpModule, ReactiveFormsModule, FormsModule],
  templateUrl: './otp-input.component.html',
  styleUrl: './otp-input.component.scss',
})
export class OtpInputComponent {
  // value: any;
  @Input() value: string | undefined;
  @Input() mask: boolean = true;
  @Input() integerOnly: boolean = true;
  @Input() length: number = 6;
  @Input() variant: string = 'filled';
  @Input() autofocus: boolean = true;

  @Output() valueChange: EventEmitter<string> = new EventEmitter<string>();

  onChange() {
    this.valueChange.emit(this.value);
  }
}
