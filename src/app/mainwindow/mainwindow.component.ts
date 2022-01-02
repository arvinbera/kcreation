import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mainwindow',
  templateUrl: './mainwindow.component.html',
  styleUrls: ['./mainwindow.component.scss']
})
export class MainwindowComponent implements OnInit {

  isExpanded?:boolean=true;
  constructor() { }

  ngOnInit(): void {
  }

}
