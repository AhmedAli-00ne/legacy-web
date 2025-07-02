import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-unit-type-modal',
  templateUrl: './unit-type-modal.component.html',
  styleUrls: ['./unit-type-modal.component.scss'],
})
export class UnitTypeModalComponent {
  @Input() floorPlans: any[] = [];
  @Output() closeModal = new EventEmitter<void>();

  activeIndex = 0;
  activeTypeIndex = -1;

  get activePlan() {
    return this.floorPlans[this.activeIndex];
  }

  get activeImageUrl(): string {
    const plan = this.activePlan;
    if (plan.types?.length) {
      if (this.activeTypeIndex==-1){
        return 'assets/images/' + plan?.imageUrl;

      }

      return 'assets/images/' + plan.types[this.activeTypeIndex]?.imageUrl;

    }
    return 'assets/images/' + plan?.imageUrl;
  }

  get activeTypeName(): string {
    const plan = this.activePlan;
    if (plan.types?.length) {
      return plan.types[this.activeTypeIndex]?.name;
    }
    return plan?.name;
  }

  selectTab(index: number) {
    this.activeIndex = index;
    this.activeTypeIndex = -1; // reset type index when tab changes
  }

  close() {
    this.closeModal.emit();
  }
}
