import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './components/app.component';
import { HouseListComponent } from "./components/house-list.component";
import { HouseService } from "./services/house.service";
import { RouterModule } from "@angular/router";
import { HouseInfoComponent } from "./components/house-info.component";
import { AppInfoComponent } from "./components/app-info.component";
import { TopNavComponent } from "./components/top-nav.component";

@NgModule({
    declarations: [
        AppComponent,
        AppInfoComponent,
        TopNavComponent,
        HouseListComponent,
        HouseInfoComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot([
            {path: '', redirectTo: '/houses', pathMatch: 'full'},
            {path: 'app-info', component: AppInfoComponent},
            {path: 'houses', component: HouseListComponent},
            {path: 'info/:id', component: HouseInfoComponent}
        ])
    ],
    providers: [HouseService],
    bootstrap: [AppComponent]
})

export class AppModule {
}
