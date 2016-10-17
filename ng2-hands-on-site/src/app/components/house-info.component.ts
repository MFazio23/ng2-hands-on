import { Component, OnInit } from "@angular/core";
import { House } from "../types/house";
import { ActivatedRoute, Params } from "@angular/router";
import { HouseService } from "../services/house.service";

@Component({
    selector: 'house-info',
    template: `
    <div *ngIf="message">{{message}}</div>
    <div *ngIf="house">
    <div>
        <label>Name: </label>
        <input [(ngModel)]="house.name">
    </div>
    <div>
        <label>Address: </label>
        <input [(ngModel)]="house.address">
    </div>
    <div>
        <label>Is Participating: </label>
        <input type="checkbox" [(ngModel)]="house.isParticipating">
    </div>
    <div>
        <label>Full Size Candybars: </label>
        <input type="checkbox" [(ngModel)]="house.hasFullSizeCandyBars">
    </div>
    <div>
        <label>Teal Pumpkin Project: </label>
        <input type="checkbox" [(ngModel)]="house.hasTealPumpkinProjectItems">
    </div>
    <div>
        <label>"Adult" Treats: </label>
        <input type="checkbox" [(ngModel)]="house.hasAdultTreats">
    </div>
    <button routerLink="/houses">Back</button>
    <button (click)="saveHouse()">Save</button>
</div>
`
})

export class HouseInfoComponent implements OnInit {
    house: House;
    id: number;

    message: string;

    constructor(private houseService: HouseService,
        private route: ActivatedRoute) {
    }

    ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            //Note: The plus sign before params converts the result to a number.
            this.id = +params['id'];
        });

        this.houseService
            .getHouse(this.id)
            .subscribe(
                house => {
                    this.house = house;
                },
                error => this.message = 'An error has occurred: ' + <any>error
            );
    }

    saveHouse(): void {
        this.houseService
            .updateHouse(this.id, this.house)
            .subscribe(
                house => {
                    this.house = house;
                    this.message = 'House saved successfully.'
                },
                error => this.message = 'An error has occurred: ' + <any>error
            );
    }
}
