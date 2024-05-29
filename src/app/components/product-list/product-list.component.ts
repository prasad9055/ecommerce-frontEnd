import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/common/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

products:Product[]=[];

currentCategoryId:number=1;

  constructor(private productService:ProductService , private route:ActivatedRoute){}

  ngOnInit():void{
    this.route.paramMap.subscribe(()=>{
    this.listProducts()
  });
  }
  listProducts() {

    // check if parameter id is Actived 
    const hasCategoryId :boolean =this.route.snapshot.paramMap.has('id');
   if(hasCategoryId){
        
    //category is is string now conver into number using ssymbol :+:

      this.currentCategoryId = +this.route.snapshot.paramMap.has('id');
   }else{
    // if not avaliable category is , set values into 1 

    this.currentCategoryId=1;
   }

// now get the Products based on Product id 
    this.productService.getProductList(this.currentCategoryId).subscribe(
      data =>{ this.products=data;}
    )
  }

}
