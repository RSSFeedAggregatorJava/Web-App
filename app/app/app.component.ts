import { Component } from '@angular/core';
import { MdDialog, MdDialogRef, MdSnackBar } from '@angular/material';
import { FeedApi } from '../api/FeedApi';

declare var module: any;

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.html',
})
export class AppComponent  {
  constructor(
    public dialog: MdDialog,
    public FeedApi: FeedApi,
    public MdSnackBar: MdSnackBar,
  ) {}

  openDialog() {
    let dialogRef = this.dialog.open(SubscribeDialog);
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
  selector: 'subscribe-dialog',
  templateUrl: './subscribe-dialog.html',
})
export class SubscribeDialog {
  constructor(public dialogRef: MdDialogRef<SubscribeDialog>) { }
}
