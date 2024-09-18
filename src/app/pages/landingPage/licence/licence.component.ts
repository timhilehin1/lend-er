import { Component } from '@angular/core';
import { SharedModule } from '../../../modules/shared/shared.module';

@Component({
  selector: 'app-licence',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './licence.component.html',
  styleUrl: './licence.component.scss',
})
export class LicenceComponent {}
