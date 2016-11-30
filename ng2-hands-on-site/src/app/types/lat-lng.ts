declare let google: any;

export class LatLng {
    lat: number;
    lng: number;

    constructor(lat: number, lng: number) {
        this.lat = lat;
        this.lng = lng;
    }

    toString() : string {
        return JSON.stringify(this);
    }
}
