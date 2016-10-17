import { Injectable } from "@angular/core";
import { Headers, Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";

import { House } from "../types/house";

import 'rxjs/Rx';

@Injectable()
export class HouseService {
    private static staticHouses: House[] = [
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

    private headers = new Headers({'Content-Type': 'application/json'});
    private dbBaseUrl: string = "https://faziodb.firebaseio.com/ng2-hands-on/houses";

    constructor(private http: Http) {

    }

    getHouses(): Observable<House[]> {
        //const url = '/data/houses.json';
        const url = `${this.dbBaseUrl}.json`;
        return this.http
            .get(url)
            .map(res => {
                let body = res.json();
                return (body.data || body || []) as House[]
            })
            .catch(this.handleError);
    }

    getHouse(id: number): Observable<House> {
        const url = `${this.dbBaseUrl}/${id}.json`;
        return this.http
            .get(url)
            .map(res => {
                let body = res.json();
                return (body.data || body) as House
            })
            .catch(this.handleError);
    }

    updateHouse(id: number, house: House): Observable<House> {
        const url = `${this.dbBaseUrl}/${id}.json`;
        return this.http
            .put(url, JSON.stringify(house), this.headers)
            .map(res => {
                let body = res.json();
                return (body.data || body) as House
            });
            //.catch(this.handleError);
    }

    private extractData(res: Response) {
        let body = res.json();
        return (body.data || body || []) as House[];
    }

    private handleError(error: any) {
        console.error("An error has occurred", error);

        return Observable.throw(error.message || 'An error has occurred.');
    }

    // Static House List helpers
    static getStaticHouses(): House[] {
        return HouseService.staticHouses;
    }

    static getStaticHouse(id: number): House {
        return HouseService.staticHouses[id];
    }

    static saveStaticHouse(id: number, house: House): void {
        HouseService.staticHouses[id] = house;
    }
}
