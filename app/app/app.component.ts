import { Component } from '@angular/core';

declare var module: any;

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.html',
})
export class AppComponent  {}
