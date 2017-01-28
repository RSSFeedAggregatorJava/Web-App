import { Component } from '@angular/core';
import { MdDialog, MdDialogRef, MdSnackBar } from '@angular/material';
import { FeedApi } from '../api/FeedApi';

declare var module: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})
export class AppComponent  {
  constructor(
    public dialog: MdDialog,
    public FeedApi: FeedApi,
    public MdSnackBar: MdSnackBar,
  ) {}

  openDialog() {
    const dialogRef = this.dialog.open(SubscribeDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.FeedApi.feedsPost(result).subscribe((data: any) => {
          this.MdSnackBar.open(`Subscribed to ${result}`, 'ok', { duration: 2000, });
        });
      }
    });
  }
}


@Component({
  moduleId: module.id,
  selector: 'app-subscribe-dialog',
  templateUrl: './subscribe-dialog.html',
})
export class SubscribeDialogComponent {
  constructor(public dialogRef: MdDialogRef<SubscribeDialogComponent>) { }
}
