import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';
import { AuthService } from '../auth/auth.service';

import { FeedApi } from '../../api/FeedApi';
import { ArticleApi } from '../../api/ArticleApi';
import { InlineResponse2001, Feed } from '../../model/models';

declare var module: any;

@Component({
  moduleId: module.id,
  selector: 'app-feed',
  templateUrl: 'feed.html',
})
export class FeedComponent implements OnInit {
  title: string;
  id: string;
  feed: Feed;
  articles: InlineResponse2001[];
  selectedArticleId: string;

  constructor(
    public FeedApi: FeedApi,
    public ArticleApi: ArticleApi,
    public route: ActivatedRoute,
    public location: Location,
    public AuthService: AuthService,
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.title = params['title'];
      this.id = params['id'];
    });
    this.route.params
      .switchMap((params: Params) => this.FeedApi.feedsFeedIdGet(+params['id'], {headers: {api_key: this.AuthService.token}}))
      .subscribe((feed: Feed) => {this.feed = feed; } );
    this.route.params
      .switchMap((params: Params) => this.ArticleApi.articlesFeedIdGet(<any>+params['id']))
      .subscribe((articles: InlineResponse2001[]) => this.articles = articles);

  }

  openArticle(id: string) {
    this.selectedArticleId = id;
  }
}
