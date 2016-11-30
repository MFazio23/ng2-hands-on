import { LatLng } from "./lat-lng";
import { Address } from "./address";
import { LightAmount } from "./light-amount";

export class House {
    name: string;
    email: string;
    address: Address;
    latLng: LatLng;
    lightAmount: LightAmount;
    hasInflatables: boolean;
    hasProjections: boolean;

    constructor(/*name: string, email: string, address: Address, lightAmount?: LightAmount, hasInflatables?: boolean, hasProjections?: boolean*/) {
        /*this.name = name;
        this.email = email;
        this.address = address;
        this.lightAmount = lightAmount || LightAmount.S;
        this.hasInflatables = hasInflatables || false;
        this.hasProjections = hasProjections || false;*/

        this.address = new Address();

        this.getLatLngFromAddress();
    }

    private getLatLngFromAddress() : void {
        //TOOD: Fill in this method.

        this.latLng = new LatLng(0, 0);
    }

    toString() : string {
        return JSON.stringify(this);
    }

}