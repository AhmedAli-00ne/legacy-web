import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-unit-type-modal',
  templateUrl: './unit-type-modal.component.html',
  styleUrls: ['./unit-type-modal.component.scss'],
})
export class UnitTypeModalComponent implements OnInit {
  @Input() floorPlans: any[] = [];
  @Output() closeModal = new EventEmitter<void>();

  activeCategoryIndex = 0;
  activeTypeIndex: number | null = null;
  dropdownOpenIndex: number | null = null;

  ngOnInit(): void {
    this.setDefault();
  }

  setDefault() {
    const activePlan = this.floorPlans[this.activeCategoryIndex];
    if (activePlan?.types?.length) {
      this.activeTypeIndex = 0;
    } else {
      this.activeTypeIndex = null;
    }
  }

  get activePlan() {
    return this.floorPlans[this.activeCategoryIndex];
  }

  get activeImageUrl() {
    const plan = this.activePlan;
    if (this.activeTypeIndex != null && plan.types) {
      return plan.types[this.activeTypeIndex]?.imageUrl;
    }
    return plan.imageUrl;
  }

  get activeTypeName() {
    const plan = this.activePlan;
    if (this.activeTypeIndex != null && plan.types) {
      return plan.types[this.activeTypeIndex]?.name;
    }
    return plan.name;
  }

  selectCategory(index: number) {
    this.activeCategoryIndex = index;
    this.setDefault();
    this.dropdownOpenIndex = null; // close dropdown when switching
  }

  toggleDropdown(index: number) {
    this.dropdownOpenIndex = this.dropdownOpenIndex === index ? null : index;
  }

  selectType(planIndex: number, typeIndex: number) {
    this.activeCategoryIndex = planIndex;
    this.activeTypeIndex = typeIndex;
    this.dropdownOpenIndex = null;
  }
  close() {
    this.closeModal.emit();
  }
}
