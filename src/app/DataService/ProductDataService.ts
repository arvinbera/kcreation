import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ProductViewModel } from "../ViewModels/Products/ProductViewModel";
import BaseDataService from "./BaseDataService";

@Injectable({
    providedIn:'root'
})

export default class ProductDataService extends BaseDataService{
    Update(Model: ProductViewModel) {
      throw new Error('Method not implemented.');
    }

    constructor(private http:HttpClient){
        super();
    }
    AddProduct(model:any)
    {
      return this.ModelRequest(this.http,"product/add",model);
    }
    DeleteProduct(model:any)
    {
       return this.DeleteRequest(this.http,"product/singledelete",model);
    }
    List () 
    {
        return this.GetRequest(this.http,"product/list");
    }
    Details(model:any)
    {
       return this.GetRequest(this.http,"product/details/"+model.id);
    }
    UpdateProduct(model:any)
    {
       return this.ModelRequest2(this.http,"product/update",model);  
    }
    UploadSingleImage(model:any)
    {
       return this.ModelFileRequest(this.http,"product/uploadsingleimage/",model);
    }

    UploadMultiImage(model:FormData)
    {
       return this.ModelFileMultiRequest(this.http,"product/uploadmultipleimage/",model);
    }

    CustomerList()
    {
       return this.GetRequest(this.http,"customer/list");
    }
    CustomerCount()
    {
       return this.GetRequest(this.http,"customer/count");
    }
    ProductCount()
    {
       return this.GetRequest(this.http,"product/count");
    }
    DashBoard()
    {
       return this.GetRequest(this.http,"dashboard");
    }
}