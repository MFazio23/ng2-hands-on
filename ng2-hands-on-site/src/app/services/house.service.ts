import { Injectable } from "@angular/core";
import { Headers, Http } from "@angular/http";
import { Observable } from "rxjs/Observable";

import { House } from "../types/house";

import 'rxjs/Rx';

@Injectable()
export class HouseService {

    private headers = new Headers({'Content-Type': 'application/json'});
    private dbBaseUrl: string = "https://faziodb.firebaseio.com/ng2-hands-on/christmas-houses";

    constructor(private http: Http) {

    }

    getHouses(): Observable<House[]> {
        const url = `${this.dbBaseUrl}.json`;
        return this.http
            .get(url)
            .map(res => {
                let body = res.json();
                return (body.data || body || []) as House[];
            })
            .catch(this.handleError);
    }

    getHouse(id: number): Observable<House> {
        const url = `${this.dbBaseUrl}/${id}.json`;
        return this.http
            .get(url)
            .map(res => {
                return (res.json() as House);
            })
            .catch(this.handleError);
    }

    saveHouse(id: number, house: House): Observable<House> {
        const url = `${this.dbBaseUrl}/${id}.json`;
        return this.http
            .put(url, JSON.stringify(house), this.headers)
            .map(res => {
                let body = res.json();
                return (body.data || body) as House
            })
            .catch(this.handleError);
    }

    private handleError(error: any) {
        console.error("An error has occurred", error);

        return Observable.throw(error.message || 'An error has occurred.');
    }
}
