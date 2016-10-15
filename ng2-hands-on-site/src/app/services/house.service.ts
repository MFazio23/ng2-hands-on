import { Injectable } from "@angular/core";
import { House } from "../types/house";

@Injectable()
export class HouseService {
    private houses: House[];

    constructor() {
        this.houses = [
            new House("Antonio Davis", "135 Weeping Birch Road", false, true, false, false),
            new House("Andrew Griffin", "6 Bartelt Way", false, true, true, true),
            new House("Daniel Hamilton", "3 Grim Hill", false, true, false, true),
            new House("Nancy Hudson", "311 Westend Place", false, true, false, true),
            new House("Frances Wright", "5945 Butterfield Junction", false, true, false, true),
            new House("Harold Webb", "5046 Chive Road", true, true, true, false),
            new House("Brandon Berry", "276 Bunting Road", true, false, false, true),
            new House("Jeremy Perkins", "7 Lindbergh Terrace", false, true, false, true),
            new House("Doris Cunningham", "826 Judy Road", false, true, false, false),
            new House("Janice Sanchez", "401 Brickson Park Center", false, true, true, true),
            new House("Gregory Lynch", "67 Lerdahl Street", true, true, true, false),
            new House("Jane Grant", "87015 Ridgeway Parkway", true, true, true, false),
            new House("Gloria Miller", "60 Ridge Oak Terrace", false, false, false, true),
            new House("Harry Webb", "457 Eastwood Way", false, true, true, true),
            new House("Nancy Rivera", "146 Summerview Circle", false, true, false, false),
            new House("Jimmy Romero", "666 Johnson Lane", false, true, false, false),
            new House("Scott Peterson", "376 Gina Junction", false, true, true, false),
            new House("Joshua Torres", "53 Anzinger Street", false, true, false, true),
            new House("Ralph Montgomery", "0781 Talmadge Park", true, false, false, true),
            new House("Jesse Wheeler", "3550 Stephen Hill", false, true, true, false),
            new House("Stephanie Perry", "7 Commercial Avenue", true, true, true, true),
            new House("Russell Grant", "3 Hazelcrest Terrace", false, true, true, false),
            new House("Johnny Griffin", "5 Sutteridge Trail", false, true, true, false),
            new House("Kimberly Dunn", "4802 Service Way", true, true, false, false),
            new House("Bobby Bailey", "7447 Lakeland Park", false, true, false, false),
        ];
    }

    getHouses(): House[] {
        return this.houses;
    }

    getHouse(id: number): House {
        return this.houses[id];
    }

    saveHouse(id: number, house: House): void {
        this.houses[id] = house;
    }
}
