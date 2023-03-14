import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Iproduc } from 'src/app/models/iproduc';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit{

  productId :number=0;
  product :Iproduc |any;

  constructor( private activeRoute:ActivatedRoute, private productService :ProductService,private router: Router){
    this.productId=Number(this.activeRoute.snapshot.paramMap.get('id'));
  }
  ngOnInit(): void {
    this.product=this.productService.getProductById(this.productId);
  }
  upadatData(){

    this.productService.editProduct(this.productId,this.product?.imgUrl,this.product?.productName,this.product?.productDicription,this.product?.quantity,this.product?.price);

    this.router.navigate(['/products']);

  }

}
