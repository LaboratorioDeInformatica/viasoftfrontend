import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Unavaliable } from './unavaliable';

const API_URL = environment.ApiUrl;

@Injectable({providedIn:'root'})
export class UnavaliableService{

    constructor(private http:HttpClient){

    }

    unavaliableMax(): Observable<Unavaliable>{
       return this.http.get<Unavaliable>(API_URL+'/api/status/unavaliable');
        
    }

}