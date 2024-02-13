import { Component } from '@angular/core';
import  ovning from './ovning';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  servers = [];


  onAddServer() {
    this.servers.push('Another Server');

  console.log(ovning)
  }

  onRemoveServer(id: number) {
    const position = id;
    this.servers.splice(position, 1);
  }
}
