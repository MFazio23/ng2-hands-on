import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './components/app.component';
import { HouseListComponent } from "./components/house-list.component";
import { HouseService } from "./services/house.service";
import { RouterModule } from "@angular/router";
import { HouseDetailComponent } from "./components/house-detail.component";

@NgModule({
    declarations: [
        AppComponent,
        HouseListComponent,
        HouseDetailComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot([
            {path: '', redirectTo: '/houses', pathMatch: 'full'},
            {path: 'houses', component: HouseListComponent},
            {path: 'info/:id', component: HouseDetailComponent}
        ])
    ],
    providers: [HouseService],
    bootstrap: [AppComponent]
})

export class AppModule {
}
