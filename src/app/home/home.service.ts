import { HttpClient } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import { takeUntil } from 'rxjs';
import { ApiStatus } from '../shared/consts';
import { destroyNotifier } from '../shared/destroy';
import { Article, ArticlesResponse } from '../shared/models';

@Injectable()
export class HomeService {
    readonly #http = inject(HttpClient);
    readonly #status = signal<ApiStatus>('idal');
    readonly #articles = signal<Article[]>([]);
    $destroy = destroyNotifier();

    readonly status = this.#status.asReadonly();
    readonly articles = this.#articles.asReadonly();

    getGlobalArticles() {
        this.$destroy.next();
        this.#status.set('loading');
        this.#http
            .get<ArticlesResponse>('/articles')
            .pipe(takeUntil(this.$destroy))
            .subscribe((response) => {
                this.#articles.set(response.articles);
                this.#status.set('success');
            });
    }
}
