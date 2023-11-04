import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ColorsService } from './colors.service';

@Component({
  selector: 'app-child-a',
  standalone: true,
  template: `
    <div
      class="child-a-div"
      [style.background]="getBackgroundColor()"
      (click)="changeValue()"
    >
      Child A: Count is {{ counta() }}

      <button (click)="changeValue()">Change Value</button>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [
    `
      .child-a-div {
        background-color: #4aed4a;
        width: 300px;
        height: 200px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 1rem;
      }
    `,
  ],
})
export class ChildAComponent {
  counta = signal(1);
  private colorService = inject(ColorsService);
  private currentColor: string | undefined;

  ngOnInit() {
    setTimeout(() => { // changing value of signal on child cmps here triggers CD only for that component
      this.counta.update(v => v + 1);
    }, 5000);
  }

  getBackgroundColor() {
    return (this.currentColor = this.colorService.getColor(this.currentColor));
  }

  changeValue() { // changing the value of signal on child cmps here triggers CD for child and its parents components
    this.counta.update((v) => v + 1);
  }
}

@Component({
  selector: 'app-child-b',
  standalone: true,
  template: `
    <div
      class="child-b-div"
      [style.background]="getBackgroundColor()"
      (click)="changeValue()"
    >
      Child B: Count is {{ countb() }}

      <button (click)="changeValue()">Change Value</button>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [
    `
      .child-b-div {
        background-color: #4aed4a;
        width: 300px;
        height: 200px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 1rem;
      }
    `,
  ],
})
export class ChildBComponent {
  countb = signal(1);
  private colorService = inject(ColorsService);

  
  ngOnInit() { 
    setTimeout(() => { // changing value of signal on child cmps here triggers CD only for that component
      this.countb.update(v => v + 1);
    }, 2500);
  }
  private currentColor: string | undefined;

  getBackgroundColor() {
    return (this.currentColor = this.colorService.getColor(this.currentColor));
  }

  changeValue() { // changing the value of signal on child cmps here triggers CD for child and its parents components
    this.countb.update((v) => v + 1);
  }
}


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ChildAComponent, ChildBComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  count = signal(1);
  private colorService = inject(ColorsService);
  private currentColor: string | undefined;

  getBackgroundColor() {
    return (this.currentColor = this.colorService.getColor(this.currentColor));
  }

  changeValue() {
    this.count.update((v) => v + 1);
  }
}
