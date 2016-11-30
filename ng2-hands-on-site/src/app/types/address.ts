export class Address {
    street: string;
    city: string;
    state: string;
    zipCode: number;

    constructor(/*street: string, city: string, state: string, zipCode: number*/) {
        /*this.street = street;
        this.city = city;
        this.state = state;
        this.zipCode = zipCode;*/
    }

    toFullAddress(): string {
        return `${this.street}, ${this.city}, ${this.state}  ${this.zipCode}`;
    }
}