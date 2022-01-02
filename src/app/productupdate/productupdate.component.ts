import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import ProductDataService from '../DataService/ProductDataService';
import { ProductViewModel } from '../ViewModels/Products/ProductViewModel';

@Component({
  selector: 'app-productupdate',
  templateUrl: './productupdate.component.html',
  styleUrls: ['./productupdate.component.css']
})
export class ProductupdateComponent implements OnInit {
  Model: ProductViewModel = new ProductViewModel;

  constructor(private http:ProductDataService,private router:ActivatedRoute) { }

  ngOnInit(): void {
    this.Model=new ProductViewModel();
    this.Model.id=this.router.snapshot.paramMap.get("id")??"";
    this.bind();
    this.UpdateProduct();
  }
   UpdateProduct()
   {
     this.http.UpdateProduct(this.Model).subscribe(res=>{
       console.log(res);

       this.bind();
     },(error:any)=>{
       alert(error.Message);
     })
   }
  bind(){
    this.http.Details(this.Model).subscribe(res=>{
      if(!res.IsSuccess){
        return window.history.go(-1);
      }
      this.Model=res.Data as ProductViewModel;
    })
  }

}
