import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '32._angular-elements';
  content:string = '';

  constructor() {
    setTimeout(() => {
      this.content = 'This is the content';
    });
  }
}
