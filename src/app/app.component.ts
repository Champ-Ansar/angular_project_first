import { Component } from '@angular/core';
import { Product } from './product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title !: string;


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
  }

  onClickSubmit(){
    console.log(this.productName);
  }
  onClickAddNewProduct(product: Product){    
    this.products.push(product);
  }
}
