import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AgGridModule } from "ag-grid-angular";
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './features/home/home.component';
import { AgreementsComponent } from './features/agreements/agreements.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AgreementsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgGridModule,MatIconModule,MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
