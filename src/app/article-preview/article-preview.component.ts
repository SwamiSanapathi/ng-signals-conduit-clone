import { Component, Input } from '@angular/core';
import { Article } from '../shared/models/articles.model';

@Component({
    standalone: true,
    selector: 'app-article-preview',
    templateUrl: './article-preview.component.html',
})
export class ArticlePreviewComponent {
    @Input() article!: Article;
}
