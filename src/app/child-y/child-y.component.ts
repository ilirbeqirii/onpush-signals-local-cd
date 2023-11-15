import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { GrandchildYComponent } from '../grandchild-y/grandchild-y.component';
import { ColorsService } from '../colors.service';
import { childYCount } from '../app.component';

@Component({
  selector: 'app-child-y',
  standalone: true,
  imports: [GrandchildYComponent],
  templateUrl: './child-y.component.html',
  styleUrl: './child-y.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildYComponent {
  count = childYCount;

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
