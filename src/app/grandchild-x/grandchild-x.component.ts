import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
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
  count = grandChildCount;

  colorService = inject(ColorsService);
  currentColor: string = '';

  getBackgroundColor() {
    return (this.currentColor = this.colorService.getColor(this.currentColor));
  }
}
