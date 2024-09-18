import { NgFor, NgIf } from '@angular/common';
import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-password-requirement',
  standalone: true,
  imports: [],
  templateUrl: './password-requirement.component.html',
  styleUrl: './password-requirement.component.scss',
})
export class PasswordRequirementComponent {
  @Input() test = '';
  @Input() passwordControl!: AbstractControl<any, any> | null;

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.checkPasswordRequirements();
    this.passwordControl?.valueChanges.subscribe((value) => {
      this.checkPasswordRequirements();
    });
  }

  get password() {
    return this.passwordControl?.value;
  }

  requirements: { text: string; met: boolean }[] = [
    { text: 'At least 8 characters', met: false },
    { text: 'At least one uppercase letter', met: false },
    { text: 'At least one lowercase letter', met: false },
    { text: 'At least one number', met: false },
    { text: 'At least one special character', met: false },
  ];

  checkPasswordRequirements() {
    this.requirements[0].met = this.password.length >= 8;
    this.requirements[1].met = /[A-Z]/.test(this.password);
    this.requirements[2].met = /[a-z]/.test(this.password);
    this.requirements[3].met = /[0-9]/.test(this.password);
    this.requirements[4].met = /[!@#$%^&*(),.?":{}|<>]/.test(this.password);
  }
}
