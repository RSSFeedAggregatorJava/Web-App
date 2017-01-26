import { Component, Input } from '@angular/core';
import { ArticleApi } from '../../api/ArticleApi';

declare var module: any;
import { Article } from '../../model/models';

@Component({
  moduleId: module.id,
  selector: 'my-article',
  templateUrl: './article.html',
})
export class ArticleComponent {
  @Input() feedId: string;
  @Input() articleId: string;
  article: Article;

  constructor(
    private ArticleApi: ArticleApi,
  ) {}


  ngOnChanges() {
    this.ArticleApi.articlesFeedIdArticleIdGet(this.feedId, this.articleId).subscribe((article: Article) => {
      this.article = article;
    });

  }
}
