import { Component, OnInit } from '@angular/core';
import { House } from '../types/House'
import { HouseService } from "../services/house.service";
import { Router } from "@angular/router";

@Component({
    selector: 'house-list',
    template: `<h1>
    {{title}}
</h1>
<div>
    <label>Participating Only?</label>
    <input type="checkbox" [(ngModel)]="participatingOnly">
</div>
<h4 *ngIf="errorMessage">An error has occurred: {{errorMessage}}</h4>
<ul>
    <li class="houses" *ngFor="let house of houses; let id = index;" [ngClass]="getRowClass(id)"
        [class.not-participating]="!house.isParticipating" (click)="goToHouseInfo(id, house)">
        <div class="house-info house-address">{{house.address}}</div>
        <span class="house-info">{{house.name}}</span>
        <div class="house-info house-icons">
            <img [class.hidden]="!house.hasFullSizeCandyBars" class="house-icon"
                 src="https://d30y9cdsu7xlg0.cloudfront.net/png/202529-200.png" title="Has Full Size Candy Bars"/>
            <img [class.hidden]="!house.hasTealPumpkinProjectItems" class="house-icon"
                 src="http://i.imgur.com/tLZVqAs.png" title="Teal Pumpkin Project"/>
            <img [class.hidden]="!house.hasAdultTreats" class="house-icon"
                 src="https://d30y9cdsu7xlg0.cloudfront.net/png/48763-200.png" title='Has "Adult" treats'/>
        </div>

    </li>
</ul>
`
})
export class HouseListComponent implements OnInit {
    title = 'House List';

    participatingOnly: boolean;

    houses: House[];
    houseString: string;

    private errorMessage: string;

    constructor(private houseService: HouseService, private router: Router) {
        this.participatingOnly = false;
    }

    ngOnInit() {
        this.loadHouses();
    }

    loadHouses(): void {
        this.houseService.getHouses().subscribe(
            houses => {
                this.houses = houses;
            },
            error => this.errorMessage = <any>error
        );
    }

    getRowClass(index): string {
        return index % 2 === 0 ? 'even' : 'odd';
    }

    goToHouseInfo(id: number, house: House): void {
        //console.log("GO to ", id, house);
        this.router.navigate(['/info', id]);
    }
}
