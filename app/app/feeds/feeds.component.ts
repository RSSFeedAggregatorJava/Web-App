import { Component, OnInit } from '@angular/core';
import { FeedApi } from '../../api/FeedApi';
import { Feed } from '../../model/models';
import { MdSidenav } from '@angular/material';

declare var module: any;

@Component({
  moduleId: module.id,
  selector: 'my-feeds',
  templateUrl: 'feeds.html',
})
export class FeedsComponent implements OnInit {
  feeds: Feed[];

  constructor(
    private FeedApi: FeedApi,
    private MdSidenav: MdSidenav,
  ) {}

  ngOnInit() {
    this.FeedApi.feedsGet().subscribe((feeds: Feed[]) => this.feeds = feeds);
  }

  unsubscribe(id: number) {
    this.FeedApi.feedsDelete(id).subscribe((data: any) => console.log('unsub', data));
  }
}
