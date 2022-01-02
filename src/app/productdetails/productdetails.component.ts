import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table/table-data-source';
import { ActivatedRoute } from '@angular/router';
import BaseCore from '../Core/BaseCore';
import ProductDataService from '../DataService/ProductDataService';
import { ProductModel } from '../Models/ProductModel';
import { ProductListViewModel } from '../ViewModels/Products/ProductListViewModel';
import { ProductViewModel } from '../ViewModels/Products/ProductViewModel';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {

  constructor(private http:ProductDataService,private router:ActivatedRoute) { }
  Model: ProductViewModel = new ProductViewModel;
  ngOnInit(): void {
    this.Model=new ProductViewModel();
    this.Model.id=this.router.snapshot.paramMap.get("id")??"";
    this.bind();
    ///this.UploadImage();
  }
  UploadSingleImage()
  {
    this.http.UploadSingleImage(this.Model).subscribe(res=>{
      console.log(res);
    },(error:any)=>{
      alert(error.Message);
    })
  }
  UploadMultipleImage()
  {

    let data=BaseCore.ModelToFormData(this.Model);

    let images=this.Model.file;



      for (let index = 0; index < images.length; index++) {
        data.append("file[]",images[index]);
      }

    this.http.UploadMultiImage(data).subscribe(res=>{
      console.log(res);
    },(error:any)=>{
      alert(error.Message);
    })
  }


  SetSingleImage(event:any){
    this.Model.file=event.target.files[0];
  }

  SetMultiImage(event:any){
    this.Model.file=event.target.files;
  }


  bind()
  {
    this.http.Details(this.Model).subscribe(res=>{
      if(!res.IsSuccess){
        return window.history.go(-1);
      }

      this.Model=Object.assign(this.Model,res.Data as ProductViewModel);
    })
  }
  
}
