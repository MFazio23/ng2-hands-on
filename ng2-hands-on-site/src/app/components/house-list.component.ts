import { Component } from '@angular/core';
import { House } from '../types/House'
import { HouseService } from "../services/house.service";
import { Router } from "@angular/router";

@Component({
    selector: 'house-list',
    template: `
  <h1>
    {{title}}
  </h1>
  <ul>
    <li class="houses" *ngFor="let house of houses; let id = index;" [ngClass]="getRowClass(id)" (click)="goToHouseInfo(id, house)">
        <div class="house-info house-address">{{house.address}}</div>
        <span class="house-info">{{house.name}}</span>
        <div class="house-info house-icons">
            <img [class.hidden]="!house.hasFullSizeCandyBars" class="house-icon" src="https://d30y9cdsu7xlg0.cloudfront.net/png/202529-200.png" title="Has Full Size Candy Bars"/>
            <img [class.hidden]="!house.hasTealPumpkinProjectItems" class="house-icon" src="http://i.imgur.com/tLZVqAs.png" title="Teal Pumpkin Project"/>
            <img [class.hidden]="!house.hasAdultTreats" class="house-icon" src="https://d30y9cdsu7xlg0.cloudfront.net/png/48763-200.png" title='Has "Adult" treats'/>
        </div>
    </li>
  </ul>
`
})
export class HouseListComponent {
    title = 'House List';

    houses: House[];

    houseString: string;

    constructor(private houseService: HouseService, private router: Router) {
        this.houses = houseService.getHouses();

        this.houseString = JSON.stringify(this.houses);
    }

    getRowClass(index): string{
        return index % 2 === 0 ? 'even' : 'odd';
    }

    goToHouseInfo(id: number, house: House): void {
        //console.log("GO to ", id, house);
        this.router.navigate(['/info', id]);
    }
}
