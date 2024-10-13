import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FundsTransferComponent } from './funds-transfer.component';

describe('FundsTransferComponent', () => {
  let component: FundsTransferComponent;
  let fixture: ComponentFixture<FundsTransferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FundsTransferComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FundsTransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
