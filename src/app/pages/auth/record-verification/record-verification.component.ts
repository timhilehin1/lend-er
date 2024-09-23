import { Component } from '@angular/core';
import { AuthLayoutComponent } from '../auth-layout/auth-layout.component';
import { SharedModule } from '../../../modules/shared/shared.module';
import { SharedServiceService } from '../../../services/shared-service.service';

@Component({
  selector: 'app-record-verification',
  standalone: true,
  imports: [AuthLayoutComponent, SharedModule],
  templateUrl: './record-verification.component.html',
  styleUrl: './record-verification.component.scss',
})
export class RecordVerificationComponent {
  constructor(private sharedService: SharedServiceService) {}
  hideEmail(email: string): string {
    const [username, domain] = email.split('@');
    const hiddenUsername =
      username.slice(0, 2) + '*'.repeat(username.length - 2);
    return `${hiddenUsername}@${domain}`;
  }

  onBack(){
    this.sharedService.goBack()
  }
}
