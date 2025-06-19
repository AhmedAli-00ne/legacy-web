import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnersModuleComponent } from './partners-module.component';

describe('PartnersModuleComponent', () => {
  let component: PartnersModuleComponent;
  let fixture: ComponentFixture<PartnersModuleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PartnersModuleComponent]
    });
    fixture = TestBed.createComponent(PartnersModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
