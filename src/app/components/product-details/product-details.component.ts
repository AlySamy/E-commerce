import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,  Router } from '@angular/router';
import { Iproduc } from 'src/app/models/iproduc';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  productId :number=0;
  product :Iproduc |null=null;


  constructor( private activeRoute:ActivatedRoute, private productService :ProductService,private router: Router){
    this.productId=Number(this.activeRoute.snapshot.paramMap.get('id'));
  }

  ngOnInit(): void {
    let products=this.productService.getAllproduct();

    if(this.productId && this.productId<products.length){
      this.product=this.productService.getProductById(this.productId)
     
    }else{
      this.router.navigate(['/products'])
    }
  }



}
