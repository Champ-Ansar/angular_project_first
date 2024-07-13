import { Component, OnInit } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  search : string = "";

  products: Product[] = [
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

  // iphone : Product = {
  //   productName : "Iphone",
  //   description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, quibusdam!",
  //   price: 100000,
  //   category: "Electronics",
  //   image: "../../assets/images/iphone.jpeg",
  //   // types: "costly"
  // };
  //  samsungS23: Product = {
  //   productName : "Samsung",
  //   description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, quibusdam!",
  //   price: 80000,
  //   category: "Electronics",
  //   image: "../../assets/images/samsungS23.jpeg",
  //   // types: "costly"
  // };

  constructor() { }

  ngOnInit(): void {
  }

  onSearch(event : any){
    console.log(event.target.value);
    this.search = event.target.value;
  }

}
