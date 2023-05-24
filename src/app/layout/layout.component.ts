import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';

@Component({
    standalone: true,
    template: `
        <app-header />
        <router-outlet />
        <app-footer />
    `,
    imports: [HeaderComponent, FooterComponent, RouterOutlet],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class LayoutComponent {}
