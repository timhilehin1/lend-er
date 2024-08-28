import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyFeatureCardComponent } from './key-feature-card.component';

describe('KeyFeatureCardComponent', () => {
  let component: KeyFeatureCardComponent;
  let fixture: ComponentFixture<KeyFeatureCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KeyFeatureCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KeyFeatureCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
