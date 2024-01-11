import { ApplicationConfig, ChangeDetectionStrategy, ɵprovideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), ɵprovideZonelessChangeDetection()]
};