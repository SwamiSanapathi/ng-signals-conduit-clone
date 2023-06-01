import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Article } from '../shared/models/articles.model';

@Component({
    standalone: true,
    selector: 'app-article-preview',
    template: `
        <ng-container *ngIf="article; else noArticle">
            <div class="article-preview">
                <div class="article-meta">
                    <a><img [src]="article.author.image" alt="avatar of article author" /></a>
                    <div class="info">
                        <a class="author">{{ article.author.username }}</a>
                        <span class="date">{{ article.updatedAt }}</span>
                    </div>
                    <button class="btn btn-outline-primary btn-sm pull-xs-right">
                        <i class="ion-heart"></i>
                        {{ article.favoritesCount }}
                    </button>
                </div>
                <a class="preview-link">
                    <h1>{{ article.title }}</h1>
                    <p>{{ article.description }}</p>
                    <span>Read more...</span>
                </a>
            </div>
        </ng-container>
        <ng-template #noArticle>
            <ng-content />
        </ng-template>
    `,
    imports: [NgIf],
})
export class ArticlePreviewComponent {
    @Input() article!: Article;
}
