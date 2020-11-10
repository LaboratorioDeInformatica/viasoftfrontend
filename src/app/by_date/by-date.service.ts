import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { NfeStatus } from '../util/nfeStatus';

const API_URL = environment.ApiUrl;

@Injectable({providedIn:'root'})
export class ByDateService{

    constructor(private http:HttpClient){

    }

    statusByDate(data:string): Observable<NfeStatus[]>{
       return this.http.get<NfeStatus[]>(API_URL+'/api/status/date?momentColected='+data);
    }

}


