import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { API_CONFIG_TOKEN } from './di';

export function provideUrlPrefixInterceptor(): HttpInterceptorFn {
    return (req, next) => {
        if (!req.url.includes('http')) {
            const { apiUrl } = inject(API_CONFIG_TOKEN);
            const cloneReq = req.clone({ url: `${apiUrl}/${req.url}` });
            return next(cloneReq);
        }
        return next(req);
    };
}
