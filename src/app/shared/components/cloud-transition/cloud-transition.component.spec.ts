import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CloudTransitionComponent } from './cloud-transition.component';

describe('CloudTransitionComponent', () => {
  let component: CloudTransitionComponent;
  let fixture: ComponentFixture<CloudTransitionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CloudTransitionComponent]
    });
    fixture = TestBed.createComponent(CloudTransitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
