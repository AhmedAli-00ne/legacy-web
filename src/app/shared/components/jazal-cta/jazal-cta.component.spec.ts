import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JazalCtaComponent } from './jazal-cta.component';

describe('JazalCtaComponent', () => {
  let component: JazalCtaComponent;
  let fixture: ComponentFixture<JazalCtaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JazalCtaComponent]
    });
    fixture = TestBed.createComponent(JazalCtaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
