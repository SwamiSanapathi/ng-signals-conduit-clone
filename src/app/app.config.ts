import { provideHttpClient } from '@angular/common/http';
import { ApplicationConfig } from '@angular/core';
import { provideRouter, withHashLocation } from '@angular/router';
import { environment } from 'src/environments/environment.development';
import { routes } from './app.routes';
import { ApiConfig, getEnvConfig } from './shared/di';

export const appConfig: ApplicationConfig = {
    providers: [provideRouter(routes, withHashLocation()), getEnvConfig(environment as ApiConfig), provideHttpClient()],
};
