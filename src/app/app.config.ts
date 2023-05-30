import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { ApplicationConfig } from '@angular/core';
import { provideRouter, withHashLocation } from '@angular/router';
import { environment } from 'src/environments/environment.development';
import { routes } from './app.routes';
import { ApiConfig, provideEnvConfig } from './shared/di';
import { provideUrlPrefixInterceptor } from './shared/interceptors';

export const appConfig: ApplicationConfig = {
    providers: [
        provideRouter(routes, withHashLocation()),
        provideEnvConfig(environment as ApiConfig),
        provideHttpClient(withInterceptors([provideUrlPrefixInterceptor()])),
    ],
};
