import { Component, OnInit } from "@angular/core";
import { House } from "../types/house";
import { LightAmount } from "../types/light-amount";
import { StateInfo } from "../types/state-info";
import { Location } from "@angular/common";
import { ActivatedRoute, Params } from "@angular/router";
import { HouseService } from "../services/house.service";

@Component({
    selector: 'house-edit',
    templateUrl: 'html/house-info.template.html'
})

export class HouseEditComponent implements OnInit {
    house: House;
    id: number;

    message: string;
    error: boolean = false;

    states: StateInfo[] = StateInfo.stateList;
    lightAmounts: any;

    constructor(private houseService: HouseService,
                private route: ActivatedRoute,
                private location: Location) {

        let lightAmounts: LightAmount[] = [LightAmount.S, LightAmount.M, LightAmount.L, LightAmount.XL];
        this.lightAmounts = lightAmounts.map(l => ({
            "val": LightAmount[l],
            "label": LightAmount.getLightAmountString(l)
        }));
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
                    if (!house) {
                        this.error = true;
                        this.message = 'An error has occurred when attempting to load the house.';
                    } else {
                        this.house = house;
                    }
                },
                error => {
                    this.error = true;
                    this.message = 'An error has occurred: ' + <any>error
                }
            );
    }

    private saveHouse(): void {
        this.houseService
            .saveHouse(this.id, this.house)
            .subscribe(
                house => {
                    this.house = house;
                    this.message = 'House saved successfully.'
                },
                error => {
                    this.error = true;
                    this.message = 'An error has occurred: ' + <any>error
                }
            );
    }

    private backClicked(): void {
        this.location.back();
    }
}
