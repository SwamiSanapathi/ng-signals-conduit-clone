import { Component } from '@angular/core';

@Component({
    selector: 'app-feed-toggle',
    standalone: true,
    template: `
        <div class="feed-toggle">
            <ul class="nav nav-pills outline-active">
                <li class="nav-item">
                    <a class="nav-link disabled">Your Feed</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link active" href="">Global Feed</a>
                </li>
            </ul>
        </div>
    `,
})
export class FeedToggleComponent {}
