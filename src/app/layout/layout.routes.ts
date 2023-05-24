import { Routes } from '@angular/router';

export default [
    {
        path: '',
        loadComponent: () => import('../home/home.component'),
    },
    {
        path: 'login',
        loadComponent: () => import('../login/login.component'),
    },
    {
        path: 'signup',
        loadComponent: () => import('../signup/signup.component'),
    },
    {
        path: 'editor',
        loadComponent: () => import('../articles/new-article.component'),
    },
    {
        path: 'settings',
        loadComponent: () => import('../settings/settings.component'),
    },
] as Routes;
