import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { FeedApi } from '../../api/FeedApi';
import { Feed } from '../../model/models';

declare var module: any;

@Component({
  moduleId: module.id,
  selector: 'my-articles',
  templateUrl: 'articles.html',
})
export class ArticlesComponent implements OnInit {
  feed: Feed;

  constructor(
    private FeedApi: FeedApi,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit() {
    this.route.params
  .switchMap((params: Params) => this.FeedApi.feedsFeedIdGet(+params['id']))
  .subscribe((feed: Feed) => this.feed = feed);
  }
}
