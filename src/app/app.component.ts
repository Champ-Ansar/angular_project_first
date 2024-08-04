import { Component } from '@angular/core';
import { Product } from './product';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title !: string;

  async getData(){
    const api = await fetch('https://fakestoreapi.com/products');
    return api.json 
  }

  ngOnInit(){
    const api = fetch('https://fakestoreapi.com/products');
    console.log(this.getData());
  }

  tempProducts !: any;

  products: Product[] = [
    {
      productName : "iphone",
      description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, quibusdam!",
      price: 100000,
      category: "Electronics",
      image: "../../assets/images/iphone.jpeg",
    },
    {
      productName : "iphone 14",
      description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, quibusdam!",
      price: 150000,
      category: "Electronics",
      image: "../../assets/images/iphone.jpeg",
    },
    {
      productName : "samsung",
      description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, quibusdam!",
      price: 80000,
      category: "Electronics",
      image: "../../assets/images/samsungS23.jpeg",
    },
    {
      productName : "Tv",
      description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, quibusdam!",
      price: 40000,
      category: "Electronics",
      image: "../../assets/images/tv.jpeg",
    },
    {
      productName : "lg tv",
      description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, quibusdam!",
      price: 40000,
      category: "Electronics",
      image: "../../assets/images/tv.jpeg",
    },
  ];

  productName : string = "Mobile";

  constructor(){
    this.title = "My Store"
    this.tempProducts = this.products;
  }

  onClickSubmit(){
    console.log(this.productName);
  }
  onClickAddNewProduct(product: Product){    
    this.products.push(product);
  }

  filterProducts(typedValue: any){  
     this.tempProducts = this.products.filter((product)=>{
      return product.productName.includes(typedValue);
    });
  }

}
