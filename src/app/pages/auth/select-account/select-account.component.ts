import { Component } from '@angular/core';
import { SharedModule } from '../../../modules/shared/shared.module';
import { LogoComponent } from '../../landingPage/logo/logo.component';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthLayoutComponent } from '../auth-layout/auth-layout.component';

@Component({
  selector: 'app-select-account',
  standalone: true,
  imports: [SharedModule, LogoComponent, AuthLayoutComponent],
  templateUrl: './select-account.component.html',
  styleUrl: './select-account.component.scss',
})
export class SelectAccountComponent {
  form!: FormGroup;
  constructor(private fb: FormBuilder) {}
  ngOnInit(): void {
    this.form = this.fb.group({
      type: [''],
    });
  }

  get selectedType() {
    return this.form.value.type;
  }

  onSubmit() {
    const type = this.form.value.type;
    console.log(type);
  }
}
