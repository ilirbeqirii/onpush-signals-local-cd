import {
  AfterViewInit,
  ApplicationRef,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Injector,
  NgZone,
  ViewChild,
  inject,
  runInInjectionContext,
} from '@angular/core';
import { GrandchildXComponent } from '../grandchild-x/grandchild-x.component';
import { ColorsService } from '../colors.service';
import { childCount } from '../app.component';
import { fromEvent, throttleTime } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-child-x',
  standalone: true,
  imports: [GrandchildXComponent],
  templateUrl: './child-x.component.html',
  styleUrl: './child-x.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChildXComponent {
  count = childCount;

  colorService = inject(ColorsService);
  currentColor: string = '';

  calls = 0;

  getChecked() {
    return ++this.calls;
  }

  getBackgroundColor() {
    return (this.currentColor = this.colorService.getColor(this.currentColor));
  }

}
