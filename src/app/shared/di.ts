import { InjectionToken, ValueProvider } from '@angular/core';

export interface ApiConfig {
    apiUrl: string;
}

export const API_CONFIG_TOKEN = new InjectionToken<ApiConfig>('app.config');

export const provideEnvConfig = (value: ApiConfig): ValueProvider => ({
    provide: API_CONFIG_TOKEN,
    useValue: value,
});
