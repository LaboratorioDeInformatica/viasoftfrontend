import { Component, Input } from '@angular/core';
import { NfeStatus } from '../util/nfeStatus';
import { ByDateService } from './by-date.service';

@Component({
    selector:'ap-by-date',
    templateUrl:'by-date.component.html'
})
export class ByDateComponent{

    @Input() nfeStatus : NfeStatus[];

    constructor(byDateService: ByDateService){
        byDateService.statusByDate('2020-11-09').subscribe(nfeStatus => {this.nfeStatus = nfeStatus});
        
    }

}