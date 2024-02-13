import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username = '';
  isEmptyString = true;

  // onInput(){
  //   if (this.username !== '') {
  //     this.isEmptyString = false;
  //   } else {
  //     this.isEmptyString = true;
  //   }
  // }

  // onClick() {
  //   this.username = '';
  // }
}
