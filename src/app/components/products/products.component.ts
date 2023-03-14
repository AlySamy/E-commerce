import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Iproduc } from 'src/app/models/iproduc';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  // products:Iproduc[]=[];
  products:any;

  constructor(private productService:ProductService,){}

  ngOnInit(): void {
    // this.products=this.productService.getAllproduct();

      this.productService.show().subscribe({

        next :(response)=>{

          this.products=response;
          console.log(response);

        }
      })

  }
  // deletProduct(productId:number){

  //   this.productService.deletProduct(this.products,productId);
  // }

}
