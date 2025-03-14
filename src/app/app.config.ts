import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
//using https clident has changed with angular 17 and standalone components we import the provided httpClident here 
//and add it as a provider down below
import { provideHttpClient } from '@angular/common/http';

import { provideClientHydration, withEventReplay } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient()
  ]
  
};
