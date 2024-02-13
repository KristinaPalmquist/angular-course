import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [
    `
    .white-text {
      color: white;
    }
    `,
  ],
})
export class AppComponent {
  displayPassword = false;
  // clickNumber = 0
  clicks = []
  onClick() {
   this.displayPassword = !this.displayPassword
  //  this.clickNumber ++
  //  this.clicks.push(this.clickNumber)
  //  this.clickNumber ++
   this.clicks.push(new Date())
  //  this.clicks.push(this.clicks.length +1)
  }
}
