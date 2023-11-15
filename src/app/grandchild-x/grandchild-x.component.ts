import { ChangeDetectionStrategy, Component, ElementRef, Injector, ViewChild, inject, runInInjectionContext } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColorsService } from '../colors.service';
import { grandChildCount } from '../app.component';

@Component({
  selector: 'app-grandchild-x',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './grandchild-x.component.html',
  styleUrl: './grandchild-x.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GrandchildXComponent {
  @ViewChild('incButton') incButton!: ElementRef<HTMLButtonElement>;

  count = grandChildCount;
  
  injector = inject(Injector);

  colorService = inject(ColorsService);
  currentColor: string = '';

  calls = 0;

  getBackgroundColor() {
    return (this.currentColor = this.colorService.getColor(this.currentColor));
  }

  getChecked() {
    return ++this.calls;
  }

  updateValue() {
    this.count.update((v) => v + 1);
  }

}
