import { Component, AfterViewInit, ViewChild } from "@angular/core";
import { HouseService } from "../services/house.service";
import { House } from "../types/house";
declare let google: any;

@Component({
    selector: 'map',
    template: `
<div *ngIf="message">{{message}}</div>
<div #gMap id="map"></div>
`
})

export class MapComponent implements AfterViewInit {

    @ViewChild('gMap') gMap;

    map: any;
    mapInfoWindow: any;

    houses: House[] = [];
    message: string;

    constructor(private houseService: HouseService) {
    }

    ngAfterViewInit(): void {
        if (this.gMap && this.gMap.nativeElement) {
            this.map = new google.maps.Map(this.gMap.nativeElement, {
                center: new google.maps.LatLng(42.9575821, -88.28315090000001),
                zoom: 17
            });

            this.mapInfoWindow = new google.maps.InfoWindow({content: ""});
        } else {
            console.error("The map section cannot be found.");
        }

        this.houseService
            .getHouses()
            .subscribe(
                houses => {
                    this.houses = houses;
                    this.loadHouseMarkers();
                },
                error => this.message = 'An error has occurred: ' + <any>error
            );
    }

    private loadHouseMarkers(): void {
        for (let houseNum in this.houses) {
            let house = this.houses[houseNum];
            let markerColor = this.getHouseMarkerColor(house.lightAmount);
            let marker = new google.maps.Marker({
                map: this.map,
                position: new google.maps.LatLng(house.latLng.lat, house.latLng.lng),
                icon: "http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|" + markerColor
            });

            let infoWindow = this.mapInfoWindow;
            let address = "";
            if (house.address) {
                //This conversion is here because Typescript doesn't like converting JSON into objects, at least not easily.
                address = `${house.address.street}, ${house.address.city}, ${house.address.state}  ${house.address.zipCode}`;
            }

            marker.addListener('click', function () {
                infoWindow.setContent(`
                    <div class="info-window">
                      <h4 class="info-window-header"><a href="/edit/${houseNum}">${house.name}</a></h4>
                      <p>
                          <span class="info-window-info">${address}</span><br />
                          <span class="info-window-info">${house.email}</span>
                      </p>
                      <div class="house-icons">
                        <div class="house-icon" style="color: #${markerColor}">${house.lightAmount}</div>
                        <img class="house-icon${!house.hasInflatables ? ' grayed-out' : ''}" src="http://i.imgur.com/pQwxmRh.png">
                        <img class="house-icon${!house.hasProjections ? ' grayed-out' : ''}" src="http://i.imgur.com/BxoY5uA.png">
                      </div>
                    </div>
                `);
                infoWindow.open(this.map, marker);
            });
        }
    }

    private getHouseMarkerColor(lightAmount): string {
        switch(lightAmount) {
            case 'S': return 'C00';
            case 'M': return 'CC0';
            case 'L': return '0C0';
            case 'XL': return '00C';
            default: return 'DDD';
        }
    }

}
