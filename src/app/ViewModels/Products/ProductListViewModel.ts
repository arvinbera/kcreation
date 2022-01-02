import { ProductModel } from "src/app/Models/ProductModel";

export class ProductListViewModel{
  List:any;
  Details: any;

  dalete_ids:Array<number>=[];
  
}
export class ProductListResponseModel {
  products:ProductModel[]=[];
  total_products:Number=0;
}