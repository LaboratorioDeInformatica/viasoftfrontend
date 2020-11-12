import { Component, Input } from '@angular/core';
import { NfeStatus } from '../util/nfeStatus';
import { StateListService } from './state-list.service';

@Component({
    selector:'ap-state-list',
    templateUrl:'state-list.component.html'
})
export class StateListCompoenent{

    nfeStatus : NfeStatus[];

    constructor(stateListService: StateListService){
        stateListService.listStateServiceStatus().subscribe(nfeStatus => {
            this.nfeStatus = nfeStatus;
        });
    }

}