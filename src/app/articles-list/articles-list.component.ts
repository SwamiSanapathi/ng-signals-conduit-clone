import { NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ArticlePreviewComponent } from '../article-preview/article-preview.component';
import { Article } from '../shared/models/articles.model';

@Component({
    standalone: true,
    selector: 'app-article-list',
    template: `
        <ng-container *ngIf="status !== 'loading'; else loading">
            <ng-container *ngIf="articles.length > 0; else noArticle">
                <app-article-preview *ngFor="let article of articles" [article]="article" />
            </ng-container>

            <ng-template #noArticle>
                <app-article-preview>No articles available..</app-article-preview>
            </ng-template>
        </ng-container>

        <ng-template #loading>
            <app-article-preview>Loading articles...</app-article-preview>
        </ng-template>
    `,
    imports: [NgFor, NgIf, ArticlePreviewComponent],
})
export class ArticleListComponent {
    @Input() articles!: Article[];
    @Input() status!: string;
}
