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
import { CommonModule } from '@angular/common';
import { ColorsService } from '../colors.service';
import { grandChildYCount } from '../app.component';
import { debounce, fromEvent, throttleTime } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-grandchild-y',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './grandchild-y.component.html',
  styleUrl: './grandchild-y.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GrandchildYComponent implements AfterViewInit {
  @ViewChild('incCount') incButton!: ElementRef<HTMLButtonElement>;

  count = grandChildYCount;

  ngZone = inject(NgZone);
  injector = inject(Injector);
  app = inject(ApplicationRef);

  colorService = inject(ColorsService);
  currentColor: string = '';

  calls = 0;

  getBackgroundColor() {
    return (this.currentColor = this.colorService.getColor(this.currentColor));
  }

  getChecked() {
    return ++this.calls;
  }

  ngAfterViewInit(): void {
    runInInjectionContext(this.injector, () => {
      this.ngZone.runOutsideAngular(() => {
        fromEvent(this.incButton.nativeElement, 'click')
          .pipe(throttleTime(1000), takeUntilDestroyed())
          .subscribe(() => {
            this.count.update((v) => v + 1);

            this.app.tick();
          });
      });
    });
  }
}
