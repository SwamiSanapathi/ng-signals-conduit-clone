import { Component, Input, Signal } from '@angular/core';
import { Article } from '../shared/models/articles.model';
import { NgFor } from '@angular/common';
import { ArticlePreviewComponent } from "../article-preview/article-preview.component";

@Component({
    standalone: true,
    selector: 'app-article-list',
    templateUrl: './articles-list.component.html',
    imports: [NgFor, ArticlePreviewComponent]
})
export class ArticleListComponent {
    @Input({ required: true }) articles!: Signal<Article[]>;
}
