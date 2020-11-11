import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http'

import { UnavaliableComponent } from './unavaliable/unavaliable.component';
import { StateListCompoenent } from './state_list/state-list.component';
import { ByStateComponent } from './by_state/by-state.component';
import { ByDateComponent } from './by_date/by-date.component';
import { ButtonModule } from 'primeng/button';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TableModule} from 'primeng/table';
import { FormsModule } from '@angular/forms';
import {CardModule} from 'primeng/card';
import {DropdownModule} from 'primeng/dropdown';


@NgModule({
  declarations: [
    AppComponent, 
    UnavaliableComponent,
    StateListCompoenent,
    ByStateComponent,
    ByDateComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ButtonModule,
    BrowserAnimationsModule,
    TableModule,
    FormsModule,
    CardModule,
    DropdownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
