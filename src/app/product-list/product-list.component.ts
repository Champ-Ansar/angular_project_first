import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../product';
// import { EventEmitter } from 'stream';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  search : string = "";

  @Input() products!: Product[];

  @Output() countIncreaser = new EventEmitter<any>();
  @Input('counter') count!: number ;


  newProduct : Product ={
    productName: "",
    description: '',
    price: 0,
    category: 'electronic'
  };
  // Passing Css to template
  styles  = {
    width: '18rem',
    'box-shadow': 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
    'margin-top': '10px'
  };

  

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
    // console.log(event.target.value);
    // this.search = event.target.value;
  }

  checkProducts(){
    return this.products.length === 0;
  }

  checkProductPrice(price: number){    
    return price <= 40000
  }

  onSubmit(){
    this.products.push(this.newProduct)
    console.log(this.products);
    this.countIncreaser.emit({
      count: this.count++
    })
    
  }
  
}
