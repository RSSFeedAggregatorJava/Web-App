import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '@angular/material';
import 'hammerjs';

import { ArticleApi } from './api/ArticleApi';
import { FeedApi } from './api/FeedApi';
import { UserApi } from './api/UserApi';
import { AuthService } from './app/auth/auth.service';


import { AppComponent, SubscribeDialogComponent } from './app/app.component';
import { ArticleComponent } from './app/article/article.component';
import { FeedComponent } from './app/feed/feed.component';
import { FeedsComponent } from './app/feeds/feeds.component';
import { LoginComponent } from './app/login/login.component';
import { SignupComponent } from './app/signup/signup.component';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule.forRoot(),
    FlexLayoutModule.forRoot(),
    RouterModule.forRoot([
         {
           path: 'feed/:id/:title',
           component: FeedComponent
         },
         {
           path: 'login',
           component: LoginComponent
         },
         {
           path: 'signup',
           component: SignupComponent
         },
       ])
     ],
  declarations: [
    AppComponent,
    ArticleComponent,
    FeedComponent,
    FeedsComponent,
    SubscribeDialogComponent,
    LoginComponent,
    SignupComponent,
  ],
  entryComponents: [
    SubscribeDialogComponent,
  ],
  exports: [],
  providers:    [ ArticleApi, FeedApi, UserApi, AuthService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
