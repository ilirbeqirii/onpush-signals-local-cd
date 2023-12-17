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
import { AppComponent, grandChildYCount } from '../app.component';
import { fromEvent, throttleTime } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ColorDirective } from '../color.directive';

@Component({
  selector: 'app-grandchild-y',
  standalone: true,
  imports: [CommonModule, ColorDirective],
  templateUrl: './grandchild-y.component.html',
  styleUrl: './grandchild-y.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ColorsService],
})
export class GrandchildYComponent implements AfterViewInit {
  // @ViewChild('incCount') incButton!: ElementRef<HTMLButtonElement>;

  count = grandChildYCount;

  // ngZone = inject(NgZone);
  // injector = inject(Injector);
  // app = inject(ApplicationRef);

  rootComponent = inject(AppComponent)

  calls = 0;

  getChecked() {
    return ++this.calls;
  }

  ngAfterViewInit(): void {
    // runInInjectionContext(this.injector, () => {
    //   this.ngZone.runOutsideAngular(() => {
    //     fromEvent(this.incButton.nativeElement, 'click')
    //       .pipe(throttleTime(1000), takeUntilDestroyed())
    //       .subscribe(() => {
    //         this.count.update((v) => v + 1);

    //         // for demo purpose: just to make coloring work
    //         this.rootComponent.cdRef.markForCheck();

    //         this.app.tick();
    //       });
    //   });
    // });
  }
}
