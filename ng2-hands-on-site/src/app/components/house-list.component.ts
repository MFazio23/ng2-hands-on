import { Component, OnInit } from '@angular/core';
import { House } from '../types/House'
import { HouseService } from "../services/house.service";
import { Router } from "@angular/router";

@Component({
    selector: 'house-list',
    template: `<ul class="list-group">
    <li class="list-group-item list-group-item-header">
        <span>{{title}}</span>
        <button *ngIf="houses" class="btn" [routerLink]="['/create', houses.length]">Create New House</button>
    </li>
    <li *ngIf="errorMessage" class="list-group-item list-group-item-header houses"><h4>An error has occurred: {{errorMessage}}</h4></li>
    <a class="list-group-item houses" *ngFor="let house of houses; let id = index;" [ngClass]="getRowClass(id)" [routerLink]="['/edit', id]">
        <div class="house-info house-address">{{house.address.street}}</div>
        <span class="house-info">{{house.name}}</span>
        <div class="house-info house-icons">
            <div class="house-icon">{{house.lightAmount}}</div>
            <img [class.vis-hidden]="!house.hasInflatables" class="house-icon" src="http://i.imgur.com/pQwxmRh.png"
                 title="Has Inflatables"/>
            <img [class.vis-hidden]="!house.hasProjections" class="house-icon" src="http://i.imgur.com/BxoY5uA.png"
                 title="Has Projections"/>
        </div>
    </a>
</ul>
`
})
export class HouseListComponent implements OnInit {
    title = 'Neighborhood Homes';

    participatingOnly: boolean;

    houses: House[];

    private errorMessage: string;

    constructor(private houseService: HouseService, private router: Router) {
        this.participatingOnly = false;
    }

    ngOnInit() {
        this.loadHouses();
    }

    loadHouses(): void {
        this.houseService.getHouses().subscribe(
            houses => this.houses = houses,
            error => this.errorMessage = <any>error
        );
    }

    goToHouseInfo(id: number): void {
        this.router.navigate(['/edit', id]);
    }

    getRowClass(index): string {
        return index % 2 === 0 ? 'even' : 'odd';
    }
}
