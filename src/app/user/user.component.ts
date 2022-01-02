import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { DialogComponent } from './dialog/dialog.component';
import { Dialog2Component } from '../dialog2/dialog2.component';
import { UserListViewModel } from '../ViewModels/Users/UserListViewModel';
import ProductDataService from '../DataService/ProductDataService';
import { ProductModel } from '../Models/ProductModel';
import { UserModel } from '../Models/UserModel';
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  
}

// const ELEMENT_DATA: PeriodicElement[] = [
//   {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
//   {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
//   {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
//   {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
//   {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
//   {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
//   {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
//   {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
//   {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
//   {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
// ];
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  
  displayedColumns: string[] = ['Name', 'Email'];
  dataSource :any;
  name: any;
  animal: any;
  service: any;
  Model: any;
  constructor(private http:ProductDataService,public dialog: MatDialog) { }
  openDialog(){
    // this.service.initializeFormGroup();
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "40%";
    
    this.dialog.open(Dialog2Component,dialogConfig);
  }
  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  ngOnInit(){
   //this.dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
   this.Model= new UserListViewModel();
   this.bind();
  }
  bind()
  {
    this.http.CustomerList().subscribe(res=>{
      this.Model.List= new MatTableDataSource<UserModel>(res.Data as UserModel[]);
    },errors=>{console.log(errors);})
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator; // For pagination
  }

}



// @Component({
//   selector: 'dialog2',
//   templateUrl: './dialog2.component.html',
// })

class Dialog {


  constructor(
    public dialogRef: MatDialogRef<Dialog>,
    @Inject(MAT_DIALOG_DATA) public data: PeriodicElement) {}
  
  onNoClick(): void {
    this.dialogRef.close();
  }
}
