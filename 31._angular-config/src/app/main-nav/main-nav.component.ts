import { Component, Injector } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import {createCustomElement} from '@angular/elements';
import { AlertComponent } from "../alert.component";
import { MyButtonComponent } from '../../../../angular-shop/projects/my-button/src/lib/my-button.component';
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent {
  content;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );


  constructor(private breakpointObserver: BreakpointObserver, private injector: Injector, private domSanitizer: DomSanitizer) {
    setTimeout(() => {
      const AlertElement = createCustomElement(AlertComponent, {injector: this.injector});
      customElements.define('my-alert', AlertElement);
      const MyButtonElement = createCustomElement(MyButtonComponent, {injector: this.injector});
      customElements.define('app-my-button', MyButtonElement);
      this.content = domSanitizer.bypassSecurityTrustHtml('<my-alert message="Rendered Dynamically"></my-alert>');
      // this.content = '<p>This is the content</p>';
    }, 1000);}

}
