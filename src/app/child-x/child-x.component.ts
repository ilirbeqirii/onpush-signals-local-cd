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
export class ChildXComponent implements AfterViewInit {
  @ViewChild('incButton') incButton!: ElementRef<HTMLButtonElement>;

  count = childCount;

  ngZone = inject(NgZone);
  injector = inject(Injector);
  app = inject(ApplicationRef);

  colorService = inject(ColorsService);
  currentColor: string = '';

  getBackgroundColor() {
    return (this.currentColor = this.colorService.getColor(this.currentColor));
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
