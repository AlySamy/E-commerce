import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit-api',
  templateUrl: './edit-api.component.html',
  styleUrls: ['./edit-api.component.css']
})
export class EditApiComponent implements OnInit {
  constructor(private productService:ProductService ,private router:Router,private activatedRoute:ActivatedRoute){}
  productId:number=Number(this.activatedRoute.snapshot.paramMap.get('id'));
  product:any;
  productForm: any = new FormGroup({
    id: new FormControl(),
    productName: new FormControl(),
    price: new FormControl(),
    quantity: new FormControl(),
    imgURL: new FormControl(),
  });

  ngOnInit(): void {
    this.productService.getOneProduct(this.productId).subscribe({
      next:(response)=>{

        this.product=response;
        if(this.product.id == 0){
          this.productService.create(this.productForm.value).subscribe();
        }
        this.productForm.controls.id.setValue(this.product.id);
        this.productForm.controls.productName.setValue(this.product.productName);
        this.productForm.controls.price.setValue(this.product.price);
        this.productForm.controls.quantity.setValue(this.product.quantity);
        this.productForm.controls.imgURL.setValue(this.product.imgURL);
      }

    })
  }


  edit(e:Event){
    e.preventDefault();
    this.productService.edit(this.productId,this.productForm.value).subscribe();
    this.router.navigate(['/api']);
  }


}
