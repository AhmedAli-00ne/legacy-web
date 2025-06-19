import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceModuleComponent } from './service-module.component';

describe('ServiceModuleComponent', () => {
  let component: ServiceModuleComponent;
  let fixture: ComponentFixture<ServiceModuleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServiceModuleComponent]
    });
    fixture = TestBed.createComponent(ServiceModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
