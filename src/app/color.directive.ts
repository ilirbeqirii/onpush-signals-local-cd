import { Directive, DoCheck, ElementRef, inject } from '@angular/core';
import { ColorsService } from './colors.service';
import { take, timer } from 'rxjs';

@Directive({
  selector: '[appColor]',
  standalone: true,
})
export class ColorDirective implements DoCheck {
  elementRef: ElementRef<HTMLElement> = inject(ElementRef<HTMLElement>);
  colorService = inject(ColorsService);

  currentColor: string = '';
  isFirstPass: boolean = true;

  ngDoCheck(): void {
    if (this.isFirstPass) {
      this.elementRef.nativeElement.style.backgroundColor = this.currentColor =
      this.colorService.getColor(this.currentColor);

      this.isFirstPass = false;
      
      return;
    }

    this.elementRef.nativeElement.style.backgroundColor = this.currentColor =
      this.colorService.getColor(this.currentColor);

    timer(200)
      .pipe(take(1))
      .subscribe(() => {
        this.elementRef.nativeElement.style.backgroundColor = this.currentColor =
          this.colorService.getColor(this.currentColor);
      });
  }
}
