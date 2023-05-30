import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { API_CONFIG_TOKEN } from '../di';

@Injectable({
    providedIn: 'root',
})
export class ArticleService {
    readonly #http = inject(HttpClient);
    readonly #apiUrl = inject(API_CONFIG_TOKEN).apiUrl;

    getGlobalArticles(): Observable<any> {
        return this.#http.get('/articles');
    }
}
