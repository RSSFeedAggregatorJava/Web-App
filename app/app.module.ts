import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '@angular/material';
import 'hammerjs';
import { RouterModule }   from '@angular/router';

import { ArticleApi } from './api/ArticleApi';
import { FeedApi } from './api/FeedApi';
import { UserApi } from './api/UserApi';


import { AppComponent }  from './app/app.component';
import { ArticleComponent }  from './app/article/article.component';
import { FeedComponent }  from './app/feed/feed.component';
import { FeedsComponent }  from './app/feeds/feeds.component';


@NgModule({
  imports: [
    BrowserModule,
    MaterialModule.forRoot(),
    FlexLayoutModule.forRoot(),
    RouterModule.forRoot([
         {
           path: 'feed/:id/:title',
           component: FeedComponent
         }
       ])
     ],
  declarations: [
    AppComponent,
    ArticleComponent,
    FeedComponent,
    FeedsComponent
  ],
  exports: [],
  providers:    [ ArticleApi, FeedApi, UserApi ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
