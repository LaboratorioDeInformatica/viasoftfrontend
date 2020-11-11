import { Component, Input } from '@angular/core';
import { NfeStatus } from '../util/nfeStatus';
import { ByDateService } from './by-date.service';
import { DatePipe } from '@angular/common'

@Component({
    selector:'ap-by-date',
    templateUrl:'by-date.component.html'
})
export class ByDateComponent{
    value: Date;
    date1: Date;

    lastInputDate: Date;

    @Input() nfeStatus : NfeStatus[];

    constructor(private byDateService: ByDateService,
        private datepipe: DatePipe){
       
        
    }


    selectDate() {
        let select_date = this.datepipe.transform(this.date1, 'yyyy-MM-dd');
        console.log(select_date);
        this.byDateService.statusByDate(select_date).subscribe(nfeStatus => {this.nfeStatus = nfeStatus});
        
        }

}