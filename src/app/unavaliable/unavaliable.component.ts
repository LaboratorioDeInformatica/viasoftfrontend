import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { Unavaliable } from './unavaliable';
import { UnavaliableService } from './unavaliable.service';




@Component({
    selector:'ap-unavaliable',
    templateUrl:'unavaliable.component.html'
})
export class UnavaliableComponent{

    @Input() nfeStatus : Unavaliable;

    constructor(unavaliableService: UnavaliableService){
         unavaliableService.unavaliableMax().subscribe(nfeStatus => {
            this.nfeStatus = nfeStatus;
            
        });
    }

}