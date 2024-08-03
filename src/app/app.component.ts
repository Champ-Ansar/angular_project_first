import { Component } from '@angular/core';
import { Product } from './product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title !: string;


  productName : string = "Mobile";

  constructor(){
    this.title = "My Store"
    // this.tempProducts = this.products;
  }

  onClickSubmit(){
    console.log(this.productName);
  }
  onClickAddNewProduct(product: Product){    
    // this.products.push(product);
  }

  filterProducts(typedValue: any){  
    //  this.tempProducts = this.products.filter((product)=>{
    //   return product.productName.includes(typedValue);
    // });
  }

}
