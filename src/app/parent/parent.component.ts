import {
  Component,
  ChangeDetectionStrategy,
} from '@angular/core';
import { ChildXComponent } from '../child-x/child-x.component';
import { ChildYComponent } from '../child-y/child-y.component';
import { parentCount } from '../app.component';
import { ColorDirective } from '../color.directive';
import { ColorsService } from '../colors.service';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildXComponent, ChildYComponent, ColorDirective],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css',
  providers: [ColorsService]
})
export class ParentComponent {
  count = parentCount;

  calls = 0;

  getChecked() {
    return ++this.calls;
  }
}
