import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitTypeModalComponent } from './unit-type-modal.component';

describe('UnitTypeModalComponent', () => {
  let component: UnitTypeModalComponent;
  let fixture: ComponentFixture<UnitTypeModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UnitTypeModalComponent]
    });
    fixture = TestBed.createComponent(UnitTypeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
