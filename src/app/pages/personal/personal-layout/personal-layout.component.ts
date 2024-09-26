import { Component } from '@angular/core';
import { SharedModule } from '../../../modules/shared/shared.module';
import { HeaderComponent } from '../../../components/Reusables/header/header.component';


@Component({
  selector: 'app-personal-layout',
  standalone: true,
  imports: [HeaderComponent, SharedModule],
  templateUrl: './personal-layout.component.html',
  styleUrl: './personal-layout.component.scss',
})
export class PersonalLayoutComponent {}
