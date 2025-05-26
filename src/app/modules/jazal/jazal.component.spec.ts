import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JazalComponent } from './jazal.component';

describe('JazalComponent', () => {
  let component: JazalComponent;
  let fixture: ComponentFixture<JazalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JazalComponent]
    });
    fixture = TestBed.createComponent(JazalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
