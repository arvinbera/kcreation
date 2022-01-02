import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import ProductDataService from '../DataService/ProductDataService';
import { ProductViewModel } from '../ViewModels/Products/ProductViewModel';

@Component({
  selector: 'dialog2',
  templateUrl: './dialog2.component.html',
  styleUrls: ['./dialog2.component.css']
})
export class Dialog2Component implements OnInit {
  Model: ProductViewModel = new ProductViewModel;
  constructor(private http:ProductDataService,
    public dialogRef: MatDialogRef<Dialog2Component>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit(): void {
    this.Model=new ProductViewModel();
  }
  AddProduct()
  {

    console.log(this.Model);
    this.http.AddProduct(this.Model).subscribe(res=>{
      console.log(res);
      alert(res.Message);

    },(error:any)=>{
      alert(error.message)
    })
  }

}
