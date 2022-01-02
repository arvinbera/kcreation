import { HttpClient } from "@angular/common/http";
import BaseCore from "../Core/BaseCore";

export default class BaseDataService {
  //private ApiUrl:string ="http://127.0.0.1:8000/api/";
  private ApiUrl:string ="http://admin.kcreation.co.in/api/api/";
  protected ModelRequest(http:HttpClient,url:string,model:any){
    let data=Object.assign(model??{})
    return http.post<BaseResponse>(this.ApiUrl+url,data);
  }
  protected  ModelFileRequest(http:HttpClient,url:string,model:any)
  {
    let data=Object.assign(model??{})
    return http.post<BaseResponse>(this.ApiUrl+url,BaseCore.ModelToFormData(data));
  }


  protected  ModelFileMultiRequest(http:HttpClient,url:string,model:FormData)
  {
    return http.post<BaseResponse>(this.ApiUrl+url,model);
  }

  protected ModelRequest2(http:HttpClient,url:string,model:any){
    let data=Object.assign(model??{})
    return http.put<BaseResponse>(this.ApiUrl+url,data);
  }
  protected GetRequest(http:HttpClient,url:string,model?:any){
    return http.get<BaseResponse>(this.ApiUrl+url);
  }
  protected DeleteRequest(http:HttpClient,url:string,model:any)
  {
    let data=Object.assign(model??{})
    return http.post<BaseResponse>(this.ApiUrl+url,data);
  }

  
}

interface BaseResponse{
    IsSuccess:boolean;
    Data:Object;
    Message:string;
    Errors:Object;
}