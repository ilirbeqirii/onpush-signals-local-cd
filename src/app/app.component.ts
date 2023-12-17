import { Component, signal, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';
import { ParentComponent } from './parent/parent.component';

export const parentCount = signal(1);
export const childCount = signal(1);
export const grandChildCount = signal(1);
export const childYCount = signal(1);
export const grandChildYCount = signal(1);

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ParentComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  cdRef = inject(ChangeDetectorRef)

  incParentCount() {
    parentCount.update((v) => v + 1);
  }

  incChildCount() {
    childCount.update((v) => v + 1);
  }

  incGrandChildCount() {
    grandChildCount.update((v) => v + 1);
  }

  incChildYCount() {
    childYCount.update((v) => v + 1);
  }

  incGrandChildYCount() {
    grandChildYCount.update((v) => v + 1);
  }
}
