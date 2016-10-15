##ng2 Data Binding

<img src="img/databinding.png" height="300" />

+ Interpolation: `{{house.address}}`
+ Property Binding: `[house]="selectedHouse"`
+ Event Binding: `(click)="selectHouse(house)"`
+ Two-Day Data Binding: `<input [(ngModel)]="house.address">`

Note:
+ Interpolation: `{{variable}}` displays the value of _variable_.
+ Property Binding: `[variable]="value"` passes _value_ into _variable_
    + e.g. `[house]="selectedHouse"`
+ Event Binding: `(click)="selectHouse(house)"`
    + Calls the method on the component when clicking the item.
+ Two-Day Data Binding: `<input [(ngModel)]="house.address">`
    