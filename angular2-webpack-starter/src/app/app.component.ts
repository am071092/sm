/*
 * Angular 2 decorators and services
 */
import './app.loader.ts';
import { Component, ViewEncapsulation } from '@angular/core';

import { AppState } from './app.service';

import { RouterLink } from '@angular/router';

import { ProductListComponent } from './products/product-list.component';
import { ProductService } from './products/product.service';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    './app.style.css'
  ],
  template: `
    <main>
      <router-outlet></router-outlet>
    </main>
  `,
  providers: [ProductService]
})

export class App {
  angularclassLogo = 'assets/img/angularclass-avatar.png';
  name = 'Angular 2 Webpack Starter';
  url = 'https://twitter.com/AngularClass';

  constructor(
    public appState: AppState) {

  }

  ngOnInit() {
    console.log('Initial App State', this.appState.state);
  }

}

/*
 * Please review the https://github.com/AngularClass/angular2-examples/ repo for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 */
