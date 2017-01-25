import { Component, OnInit } from '@angular/core';
import { FeedApi } from '../../api/FeedApi';
import { Feed } from '../../model/models';

declare var module: any;

@Component({
  moduleId: module.id,
  selector: 'my-feeds',
  templateUrl: 'feeds.html',
})
export class FeedsComponent implements OnInit {
  feeds: Feed[];

  constructor(
    private FeedApi: FeedApi
  ) {}

  ngOnInit() {
    console.log(`onInit`);
    this.FeedApi.feedsGet().subscribe((feeds: Feed[]) => this.feeds = feeds);
  }

}
