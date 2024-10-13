import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../../modules/shared/shared.module';
import { PersonalLayoutComponent } from '../personal-layout/personal-layout.component';
import { SharedServiceService } from '../../../services/shared-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HistoryCardComponent } from '../../../components/Reusables/history-card/history-card.component';

@Component({
  selector: 'app-funds-transfer',
  standalone: true,
  imports: [PersonalLayoutComponent, SharedModule, HistoryCardComponent],
  templateUrl: './funds-transfer.component.html',
  styleUrl: './funds-transfer.component.scss',
})
export class FundsTransferComponent implements OnInit {
  transactions: { name: string; type: string; date: string; amount: string }[] =
    [
      {
        name: 'John Doe',
        type: 'CR', // Credit
        date: '13/10/2024',
        amount: '5000',
      },
      {
        name: 'Jane Smith',
        type: 'DR', // Debit
        date: '12/10/2024',
        amount: '3000',
      },
      {
        name: 'Michael Johnson',
        type: 'CR',
        date: '11/10/2024',
        amount: '10000',
      },
      {
        name: 'Emily Davis',
        type: 'DR',
        date: '10/10/2024',
        amount: '1500',
      },
      {
        name: 'Chris Brown',
        type: 'CR',
        date: '09/10/2024',
        amount: '2000',
      },
    ];

  senderAccountNumber: string = '0363053786';
  senderAccountBalance: string = '20000';
  recipientForm!: FormGroup;
  constructor(
    private shared: SharedServiceService,
    private fb: FormBuilder,
    private router: Router
  ) {}
  goBack() {
    this.shared.goBack();
  }

  ngOnInit(): void {
    this.recipientForm = this.fb.group({
      bankName: [null, Validators.required],
      recipientAccountNumber: [null, Validators.required],
      amount: [null, Validators.required],
      narration: [null],
    });
  }

  onSubmit() {
    this.recipientForm.markAllAsTouched();
    if (this.recipientForm.valid) {
      this.router.navigate(['/pin-verification'], {
        queryParams: { destination: 'transfer' },
      });
    }
  }
}
