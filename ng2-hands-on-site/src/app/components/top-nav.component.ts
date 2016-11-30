import { Component } from '@angular/core';

@Component({
    selector: 'top-nav',
    template: `<nav class="navbar navbar-default">
    <a class="navbar-brand" href="#"><img src="http://i.imgur.com/lKCemln.png"></a>
    <ul class="nav navbar-nav">
        <li [routerLinkActive]="['active']"><a [routerLink]="['/houses']">Houses</a></li>
        <li [routerLinkActive]="['active']"><a [routerLink]="['/map']">House Map</a></li>
        <li [routerLinkActive]="['active']"><a [routerLink]="['/app-info']">App Info</a></li>
    </ul>
</nav>
`
})
export class TopNavComponent {
    title = 'Trick or Treat House Directory';
}
