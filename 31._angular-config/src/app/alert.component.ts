import { Component, Input } from "@angular/core";

@Component({
  selector: 'app-alert',
  template: `
    <div class="alert alert-danger">
      This is an alert component. {{ message}}
    </div>
  `,
  styles: [`
    div {
        border: 1px solid black;
      background-color: salmon;
      padding: 1.5em;
      font-family: sans-serif;
      width: max-content;
      border-radius: 0.8em;
    }
  `]
})
export class AlertComponent {
  @Input() message: string = '';
}
