import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ArticlesResponse } from '../models/articles.model';

@Injectable({
    providedIn: 'root',
})
export class ArticleService {
    readonly #http = inject(HttpClient);

    getGlobalArticles(): Observable<any> {
        return this.#http.get<ArticlesResponse>('/articles');
    }
}
