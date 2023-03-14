import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class APIComponent implements OnInit {
  constructor(private productService:ProductService){}
  products:any;
  ngOnInit(): void {
    this.productService.show().subscribe({
      next :(response)=>{

        this.products=response;
        console.log(this.products);

      }
    })
  }
  
  remove(id: number) {
    this.productService.delete(id).subscribe((response) => {
      this.products = this.products.filter((product: any) => product.id != id);
    });
  }
}



