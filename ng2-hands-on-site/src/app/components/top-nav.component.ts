import { Component } from '@angular/core';

@Component({
    selector: 'top-nav',
    template: `
<h1 class="main-title">{{title}}</h1>
<div class="top-nav-links">
    <a class="top-nav-link" routerLink="/houses">Houses</a>
    <a class="top-nav-link" routerLink="/app-info">App Info</a>
</div>
`
})
export class TopNavComponent {
    title = 'Trick or Treat House Directory';
}
