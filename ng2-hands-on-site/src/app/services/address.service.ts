import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Observable } from "rxjs/Observable";

import 'rxjs/Rx';
import { LatLng } from "../types/lat-lng";

declare let google: any;

@Injectable()
export class AddressService {

    geocoder: any;

    constructor(private http: Http) {
        this.geocoder = new google.maps.Geocoder();
    }

    getLatLngFromAddress(): Observable<LatLng> {
        return null;
    }
}
