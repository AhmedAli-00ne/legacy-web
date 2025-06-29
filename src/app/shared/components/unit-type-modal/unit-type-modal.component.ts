import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-unit-type-modal',
  templateUrl: './unit-type-modal.component.html',
  styleUrls: ['./unit-type-modal.component.scss'],
})
export class UnitTypeModalComponent {
  @Input() floorPlans: { name: string; imageUrl: string }[] = [];
  @Output() closeModal = new EventEmitter<void>();

  activeIndex = 0;

  selectTab(index: number) {
    this.activeIndex = index;
  }

  close() {
    this.closeModal.emit();
  }
}
