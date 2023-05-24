import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('../app/layout/layout.component'),
        loadChildren: () => import('../app/layout/layout.routes'),
    },
];
