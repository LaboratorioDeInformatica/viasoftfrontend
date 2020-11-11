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

    constructor(private byStateService: ByStateService){

        this.items = [];
        for (let i = 0; i < 10000; i++) {
            this.items.push({label: 'Item ' + i, value: 'Item ' + i});
        }

        this.cities = [
            {name: 'Amazonas', code: 'AM'},
            {name: 'Bahia', code: 'BA'},
            {name: 'Ceara', code: 'CE'},
            {name: 'Goias', code: 'GO'},
            {name: 'Mato Grosso', code: 'MT'},
            {name: 'Minas Gerais', code: 'MG'},
            {name: 'Pernanbuco', code: 'PE'},
            {name: 'Parana', code: 'PR'},
            {name: 'Rio Grande do SUl', code: 'RS'},
            {name: 'Sao Paulo', code: 'SP'}
        ];
        
    }

    onChangeCity(event){
        let changedValue = event.value;
        console.log(changedValue.code)
        this.byStateService.statusByState(changedValue.code).subscribe(status => {this.status = status});
    }

}