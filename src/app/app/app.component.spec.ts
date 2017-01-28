import { AppComponent } from './app.component';

import { ArticleApi } from '../api/ArticleApi';
import { FeedApi } from '../api/FeedApi';
import { UserApi } from '../api/UserApi';

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { MaterialModule } from '@angular/material';
import { RouterTestingModule } from '@angular/router/testing';
import { FeedsComponent } from './feeds/feeds.component';
import 'hammerjs'

describe('AppComponent', function () {
  let de: DebugElement;
  let comp: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ MaterialModule.forRoot(), RouterTestingModule.withRoutes([]) ],
      providers:    [ ArticleApi, FeedApi, UserApi ],
      declarations: [ AppComponent, FeedsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    comp = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('md-toolbar h1'));
  });

  it('should create component', () => expect(comp).toBeDefined() );

  it('should have expected <h1> text', () => {
    fixture.detectChanges();
    const h1 = de.nativeElement;
    expect(h1.innerText).toMatch(/RSS Feed Aggregator/i,
      '<h1> should say RSS Feed Aggregator"');
  });
});
