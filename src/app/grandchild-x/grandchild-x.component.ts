import { ChangeDetectionStrategy, Component, ElementRef, Injector, ViewChild, inject, runInInjectionContext } from '@angular/core';
import { CommonModule } from '@angular/common';
import { grandChildCount } from '../app.component';
import { ColorDirective } from '../color.directive';
import { ColorsService } from '../colors.service';

@Component({
  selector: 'app-grandchild-x',
  standalone: true,
  imports: [CommonModule, ColorDirective],
  templateUrl: './grandchild-x.component.html',
  styleUrl: './grandchild-x.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ColorsService]
})
export class GrandchildXComponent {
  @ViewChild('incButton') incButton!: ElementRef<HTMLButtonElement>;

  count = grandChildCount;
  
  injector = inject(Injector);

  calls = 0;

  getChecked() {
    return ++this.calls;
  }

  updateValue() {
    this.count.update((v) => v + 1);
  }

}
