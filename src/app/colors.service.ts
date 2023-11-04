import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class ColorsService {
  private colors = [
    '#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6',
    '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D'
  ];

  getColor(currentColor?: string): string {
    if (!currentColor) {
      return this.pickColor();
    }

    let pickedColor = currentColor;

    while (pickedColor === currentColor) {
      pickedColor = this.pickColor();
    }
    return pickedColor;
  }

  private pickColor(): string {
    return this.colors[Math.floor(Math.random() * this.colors.length)];
  }

}
