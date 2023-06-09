import { Component } from '@angular/core';

@Component({
    selector: 'app-tag-list',
    standalone: true,
    template: `
        <div class="sidebar">
            <p>Popular Tags</p>

            <div class="tag-list">
                <a href="" class="tag-pill tag-default">programming</a>
                <a href="" class="tag-pill tag-default">javascript</a>
                <a href="" class="tag-pill tag-default">emberjs</a>
                <a href="" class="tag-pill tag-default">angularjs</a>
                <a href="" class="tag-pill tag-default">react</a>
                <a href="" class="tag-pill tag-default">mean</a>
                <a href="" class="tag-pill tag-default">node</a>
                <a href="" class="tag-pill tag-default">rails</a>
            </div>
        </div>
    `,
})
export class TagListComponent {}
