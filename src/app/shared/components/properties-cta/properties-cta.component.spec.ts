import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertiesCtaComponent } from './properties-cta.component';

describe('PropertiesCtaComponent', () => {
  let component: PropertiesCtaComponent;
  let fixture: ComponentFixture<PropertiesCtaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PropertiesCtaComponent]
    });
    fixture = TestBed.createComponent(PropertiesCtaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
