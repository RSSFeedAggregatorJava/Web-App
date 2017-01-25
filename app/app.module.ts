import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '@angular/material';
import 'hammerjs';
import { RouterModule }   from '@angular/router';

import { ArticleApi } from './api/ArticleApi';
import { FeedApi } from './api/FeedApi';
import { UserApi } from './api/UserApi';


import { AppComponent }  from './app/app.component';
import { ArticlesComponent }  from './app/articles/articles.component';
import { FeedsComponent }  from './app/feeds/feeds.component';


@NgModule({
  imports: [
    BrowserModule,
    MaterialModule.forRoot(),
    RouterModule.forRoot([
         {
           path: 'feed/:id',
           component: ArticlesComponent
         }
       ])
     ],
  declarations: [
    AppComponent,
    ArticlesComponent,
    FeedsComponent
  ],
  exports: [],
  providers:    [ ArticleApi, FeedApi, UserApi ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
