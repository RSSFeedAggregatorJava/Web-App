import { Component, Input, OnChanges } from '@angular/core';
import { ArticleApi } from '../../api/ArticleApi';
import { AuthService } from '../auth/auth.service';

declare var module: any;
import { Article } from '../../model/models';

@Component({
  selector: 'app-article',
  templateUrl: './article.html',
})
export class ArticleComponent implements OnChanges {
  @Input() feedId: string;
  @Input() articleId: string;
  article: Article;

  constructor(
    public ArticleApi: ArticleApi,
    public AuthService: AuthService,
  ) {}


  ngOnChanges() {
    this.ArticleApi.articlesFeedIdArticleIdGet(this.feedId, this.articleId, {headers: {api_key: this.AuthService.token}})
      .subscribe((article: Article) => {
        this.article = article;
      });

  }
}
