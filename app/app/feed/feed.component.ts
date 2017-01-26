import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { FeedApi } from '../../api/FeedApi';
import { ArticleApi } from '../../api/ArticleApi';
import { InlineResponse2001, Feed } from '../../model/models';

declare var module: any;

@Component({
  moduleId: module.id,
  selector: 'my-feed',
  templateUrl: 'feed.html',
})
export class FeedComponent implements OnInit {
  title: string;
  id: string;
  feed: Feed;
  articles: InlineResponse2001[];
  selectedArticleId: string;

  constructor(
    private FeedApi: FeedApi,
    private ArticleApi: ArticleApi,
    private route: ActivatedRoute,
    private location: Location,
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.title = params['title'];
      this.id = params['id'];
    });
    this.route.params
      .switchMap((params: Params) => this.FeedApi.feedsFeedIdGet(+params['id']))
      .subscribe((feed: Feed) => {this.feed = feed; console.log(feed)} );
    this.route.params
      .switchMap((params: Params) => this.ArticleApi.articlesFeedIdGet(<any>+params['id']))
      .subscribe((articles: InlineResponse2001[]) => this.articles = articles);

  }

  openArticle(id: string) {
    this.selectedArticleId = id;
  }
}
