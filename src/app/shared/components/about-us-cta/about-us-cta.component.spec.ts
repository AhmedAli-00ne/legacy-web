import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUsCtaComponent } from './about-us-cta.component';

describe('AboutUsCtaComponent', () => {
  let component: AboutUsCtaComponent;
  let fixture: ComponentFixture<AboutUsCtaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutUsCtaComponent]
    });
    fixture = TestBed.createComponent(AboutUsCtaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
