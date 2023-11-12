import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { ChildXComponent } from '../child-x/child-x.component';
import { ChildYComponent } from '../child-y/child-y.component';
import { ColorsService } from '../colors.service';
import { parentCount } from '../app.component';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildXComponent, ChildYComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ParentComponent {
  count = parentCount;

  colorService = inject(ColorsService);
  currentColor: string = '';

  getBackgroundColor() {
    return (this.currentColor = this.colorService.getColor(this.currentColor));
  }
}
