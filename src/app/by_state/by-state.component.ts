import { Component, Input } from '@angular/core';
import { NfeStatus } from '../util/nfeStatus';
import { ByStateService } from './by-state.service';
import {SelectItem} from 'primeng/api';

interface City {
    name: string,
    code: string
}

@Component({
    selector:'ap-by-state',
    templateUrl:'by-state.component.html'
})
export class ByStateComponent{

    cities: City[];

    @Input() status : NfeStatus;

    selectedCity1: City;

    items: SelectItem[];

    item: string;

    constructor(byStateService: ByStateService){

        this.items = [];
        for (let i = 0; i < 10000; i++) {
            this.items.push({label: 'Item ' + i, value: 'Item ' + i});
        }

        this.cities = [
            {name: 'New York', code: 'NY'},
            {name: 'Rome', code: 'RM'},
            {name: 'London', code: 'LDN'},
            {name: 'Istanbul', code: 'IST'},
            {name: 'Paris', code: 'PRS'}
        ];
        byStateService.statusByState('BA').subscribe(status => {this.status = status});
    }

    teste(){
        console.log("cliquie")
    }

}