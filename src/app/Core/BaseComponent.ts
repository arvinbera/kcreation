import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";
import { Directive, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { map, shareReplay } from "rxjs/operators";

@Directive()
export abstract class BaseComponent implements OnInit {

    ngOnInit():void{

    }
    constructor(private breakpointObserver: BreakpointObserver) {
    }
  
    cols$: Observable<number> = this.breakpointObserver
    .observe([Breakpoints.Small, Breakpoints.XSmall])
    .pipe(
      map((result) => {
        if (result.breakpoints[Breakpoints.XSmall]) {
          return 1;
        } else if (result.breakpoints[Breakpoints.Small]) {
          return 2;
        } else {
          return 3;
        }
      }),
      shareReplay()
    );

}