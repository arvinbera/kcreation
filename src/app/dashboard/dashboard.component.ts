import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { BaseComponent } from '../Core/BaseComponent';
import ProductDataService from '../DataService/ProductDataService';
import DashboardViewModel from '../ViewModels/Dashboard/DashboardViewModel';
import { ProductListViewModel } from '../ViewModels/Products/ProductListViewModel';
import { ProductViewModel } from '../ViewModels/Products/ProductViewModel';
import { UserListViewModel } from '../ViewModels/Users/UserListViewModel';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent extends BaseComponent implements OnInit{
  

  constructor(private http:ProductDataService,breakpointObserver: BreakpointObserver){
    super(breakpointObserver);
  }

  Model:DashboardViewModel= new DashboardViewModel();
  ngOnInit():void{
   
   this.bind();
  }
  bind()
  {
    this.http.DashBoard().subscribe(res=>{
      Object.assign(this.Model,res.Data);
    },
      errors=>{
        console.log(errors);
      })
  }
 
}
