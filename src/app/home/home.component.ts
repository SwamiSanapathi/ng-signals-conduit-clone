import { Component, OnDestroy, OnInit, inject, signal } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { ArticleListComponent } from '../articles-list/articles-list.component';
import { ArticleService } from '../shared/data-access/articles.service';
import { $destroyRef } from '../shared/destroy';
import { Article, ArticlesResponse } from '../shared/models/articles.model';

@Component({
    standalone: true,
    templateUrl: './home.component.html',
    imports: [ArticleListComponent],
})
export default class HomeComponent implements OnInit, OnDestroy {
    readonly #articleService = inject(ArticleService);
    $destory = $destroyRef();
    articles = signal<Article[]>([]);

    ngOnInit() {
        this.getArticles();
    }

    getArticles() {
        this.$destory.next();
        this.#articleService
            .getGlobalArticles()
            .pipe(takeUntil(this.$destory))
            .subscribe((response: ArticlesResponse) => {
                this.articles.set(response.articles);
                console.log(this.articles());
                
            });
    }

    ngOnDestroy() {
        this.$destory.next();
        this.$destory.complete();
        console.log('home component destroyed');
    }
}
