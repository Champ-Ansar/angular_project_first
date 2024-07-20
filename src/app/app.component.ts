import { Component } from '@angular/core';
import { Product } from './product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title !: string;
  count = 0;
  productName : string = "Mobile";

  productsArr: Product[] = [
    {
      productName : "Iphone",
      description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, quibusdam!",
      price: 100000,
      category: "Electronics",
      image: "../../assets/images/iphone.jpeg",
    },
    {
      productName : "Samsung",
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
      productName : "Tv",
      description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, quibusdam!",
      price: 40000,
      category: "Electronics",
      image: "../../assets/images/tv.jpeg",
    },
  ];

  constructor(){
    this.title = "My Store"
  }

  onClickSubmit(){
    console.log(this.productName);
  }

  onCountIncrease(){
    this.count++;
  }
}
