import { Component, Input } from '@angular/core';
import { NfeStatus } from '../util/nfeStatus';
import { ByStateService } from './by-state.service';

@Component({
    selector:'ap-by-state',
    templateUrl:'by-state.component.html'
})
export class ByStateComponent{

    @Input() nfeStatus : NfeStatus;

    constructor(byStateService: ByStateService){
        byStateService.statusByState('BA').subscribe(nfeStatus => {this.nfeStatus = nfeStatus});
    }

}