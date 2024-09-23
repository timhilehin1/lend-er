import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordVerificationComponent } from './record-verification.component';

describe('RecordVerificationComponent', () => {
  let component: RecordVerificationComponent;
  let fixture: ComponentFixture<RecordVerificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecordVerificationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecordVerificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
