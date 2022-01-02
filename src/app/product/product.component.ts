import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTable, MatTableDataSource } from '@angular/material/table';
//import { Console } from 'console';
import ProductDataService from '../DataService/ProductDataService';
import { Dialog2Component } from '../dialog2/dialog2.component';
import { ProductModel } from '../Models/ProductModel';
import { ProductListResponseModel, ProductListViewModel } from '../ViewModels/Products/ProductListViewModel';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  
  displayedColumns: string[] = ['select','product_name', 'category','price'];
  Model: ProductListViewModel = new ProductListViewModel;

  Items:any[]=[];
  constructor(private http:ProductDataService,public dialog: MatDialog) { }
  openDialog(){
    // this.service.initializeFormGroup();
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "40%";
    
    this.dialog.open(Dialog2Component,dialogConfig);
  }
  ngOnInit(): void {
    this.Model=new ProductListViewModel();
    this.bind();
  }
  bind()
  {
    
    this.http.List().subscribe(res=>{
      let model=res.Data as unknown as ProductListResponseModel;
      this.Model.List= new MatTableDataSource<ProductModel>(model.products as ProductModel[]);
      //.Model.List.paginator= this.paginator
      this.Items=model.products;
    
    },errors=>{
      console.log(errors);
    })
    
  }
  DeleteItem(x:any)
  {
    if(!window.confirm("Are you sure ?")){
      return;
    }
   this.http.DeleteProduct({id:x}).subscribe(res=>{

    alert(res.Message);
    this.bind();



   },(error:any)=>{alert(error.Message)})
  }
  SelectDeleteItem(event:any){
    
  }

}
