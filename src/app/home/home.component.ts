import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { ArticleListComponent } from '../articles-list/articles-list.component';
import { FeedToggleComponent } from '../feed-toggle/feed-toggle.component';
import { TagListComponent } from '../tag-list/tag-list.component';
import { HomeService } from './home.service';

@Component({
    standalone: true,
    templateUrl: './home.component.html',
    imports: [ArticleListComponent, FeedToggleComponent, TagListComponent],
    providers: [HomeService],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class HomeComponent implements OnInit {
    protected readonly homeService = inject(HomeService);

    ngOnInit() {
        this.homeService.getGlobalArticles();
    }
}
