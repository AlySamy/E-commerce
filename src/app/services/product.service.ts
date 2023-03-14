import { Injectable } from '@angular/core';
import { Iproduc } from '../models/iproduc';
import { productList } from '../models/productLsit';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private _HttpClient:HttpClient ) { }
  getAllproduct():Iproduc[]{
    return productList;

  }
  getProductById(ProductId:number):Iproduc{

    return productList.filter((product) => product.id == ProductId)[0];
  }

  editProduct(ProductId:number,imgUrl:string,Name:string,productDicription:string,quantity:number,price:number):void{

    let productForEdit=productList.filter((product) => product.id == ProductId)[0];
    productForEdit.imgUrl=imgUrl;
    productForEdit.productName=Name;
    productForEdit.productDicription=productDicription;
    productForEdit.quantity=quantity;
    productForEdit.price=price;
  }

  deletProduct(productList:any[],ProductId:number){

    const index = productList.findIndex(obj => obj.id === ProductId);
    if (index > -1) {
      productList.splice(index, 1);
    }
  }

  baseUrl :string ='http://localhost:3000/products'

  show() {
    return this._HttpClient.get(this.baseUrl);
  }
  getOneProduct(id: number) {
    return this._HttpClient.get(`${this.baseUrl}/${id}`);
  }
  edit(id: number, body: any) {
    return this._HttpClient.put(`${this.baseUrl}/${id}`, body);
  }
  create(body: any) {
    return this._HttpClient.post(this.baseUrl, body);
  }
  delete(id: number) {
    return this._HttpClient.delete(`${this.baseUrl}/${id}`);
  }


}
