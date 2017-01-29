import { Component, OnInit } from '@angular/core';
import { FeedApi } from '../../api/FeedApi';
import { AuthService } from '../auth/auth.service';
import { Feed } from '../../model/models';
import { MdSidenav, MdSnackBar } from '@angular/material';

declare var module: any;

@Component({
  selector: 'app-feeds',
  templateUrl: './feeds.html',
})
export class FeedsComponent implements OnInit {
  feeds: Feed[];

  constructor(
    private FeedApi: FeedApi,
    private MdSidenav: MdSidenav,
    private MdSnackBar: MdSnackBar,
    private AuthService: AuthService,
  ) {}

  ngOnInit() {
    console.log(this.AuthService.token);
    this.FeedApi.feedsGet({apiToken: this.AuthService.token}).subscribe((feeds: Feed[]) => this.feeds = feeds);
  }

  unsubscribe(id: number, title: string) {
    this.FeedApi.feedsDelete(id).subscribe((data: any) => {
      this.MdSnackBar.open(`Unsubscribed from ${title}`, 'ok', { duration: 2000, });
    });
  }
}
