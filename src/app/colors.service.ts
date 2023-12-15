import {Injectable} from "@angular/core";

@Injectable()
export class ColorsService {
  private colors = ['#009d00', '#B34D4D'];

  getColor(currentColor?: string): string {
    if (!currentColor) {
      return this.colors[0];
    }

    if (currentColor == this.colors[0]) {
      return this.colors[1]
    }

    if (currentColor == this.colors[1]) {
      return this.colors[0]
    }

    return this.colors[0]
  }
}
