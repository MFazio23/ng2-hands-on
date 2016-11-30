import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './components/app.component';
import { HouseListComponent } from "./components/house-list.component";
import { HouseService } from "./services/house.service";
import { RouterModule } from "@angular/router";
import { HouseCreateComponent } from "./components/house-create.component";
import { HouseEditComponent } from "./components/house-edit.component";
import { AppInfoComponent } from "./components/app-info.component";
import { TopNavComponent } from "./components/top-nav.component";
import { MapComponent } from "./components/map.component";
import { AddressService } from "./services/address.service";

@NgModule({
    declarations: [
        AppComponent,
        AppInfoComponent,
        HouseCreateComponent,
        HouseEditComponent,
        HouseListComponent,
        MapComponent,
        TopNavComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot([
            {path: '', redirectTo: '/houses', pathMatch: 'full'},
            {path: 'app-info', component: AppInfoComponent},
            {path: 'houses', component: HouseListComponent},
            {path: 'edit/:id', component: HouseEditComponent},
            {path: 'create/:id', component: HouseCreateComponent},
            {path: 'map', component: MapComponent}
        ])
    ],
    providers: [AddressService, HouseService],
    bootstrap: [AppComponent]
})

export class AppModule {
}
