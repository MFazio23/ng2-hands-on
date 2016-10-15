export class House {
    name: string;
    address: string;
    isParticipating: boolean;
    hasFullSizeCandyBars: boolean;
    hasTealPumpkinProjectItems: boolean;
    hasAdultTreats: boolean;


    constructor(name: string, address: string, isParticipating: boolean, hasFullSizeCandyBars: boolean, hasTealPumpkinProjectItems: boolean, hasAdultTreats: boolean) {
        this.name = name;
        this.address = address;
        this.isParticipating = isParticipating;
        this.hasFullSizeCandyBars = hasFullSizeCandyBars;
        this.hasTealPumpkinProjectItems = hasTealPumpkinProjectItems;
        this.hasAdultTreats = hasAdultTreats;
    }

    toString() : string {
        return JSON.stringify(this);
    }
}
