import { Component, ChangeDetectionStrategy } from '@angular/core';
import { GrandchildYComponent } from '../grandchild-y/grandchild-y.component';
import { ColorsService } from '../colors.service';
import { childYCount } from '../app.component';
import { ColorDirective } from '../color.directive';

@Component({
  selector: 'app-child-y',
  standalone: true,
  imports: [GrandchildYComponent, ColorDirective],
  templateUrl: './child-y.component.html',
  styleUrl: './child-y.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ColorsService]
})
export class ChildYComponent {
  count = childYCount;

  calls = 0;

  getChecked() {
    return ++this.calls;
  }

}
