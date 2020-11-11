import { Component, OnInit } from '@angular/core';
import { NfeStatus } from './util/nfeStatus';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'viasoftfrontend';
  nfeStatus : NfeStatus[];
  status:NfeStatus;


  constructor(private primengConfig: PrimeNGConfig) {}
  ngOnInit() {
    this.primengConfig.ripple = true;
}
}
