import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import { GrandchildXComponent } from '../grandchild-x/grandchild-x.component';
import { childCount } from '../app.component';
import { ColorDirective } from '../color.directive';
import { ColorsService } from '../colors.service';

@Component({
  selector: 'app-child-x',
  standalone: true,
  imports: [GrandchildXComponent, ColorDirective],
  templateUrl: './child-x.component.html',
  styleUrl: './child-x.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ColorsService]
})
export class ChildXComponent {
  count = childCount;

  calls = 0;

  getChecked() {
    return ++this.calls;
  }

}
