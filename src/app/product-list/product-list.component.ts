import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../product';
import { DataHandlerService } from '../data-handler.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  search : string = "";

  allProducts !: Product[];
  constructor(private dataHandler : DataHandlerService){
    // console.log(dataHandler.products);
    this.allProducts = dataHandler.products;
    
  }

  ngDoCheck(){
    this.allProducts = this.dataHandler.products;
    console.log(this.allProducts);
  }
  

  // @Input() allProducts !: Product [];
  @Output() sendSearchEvent = new EventEmitter<any>();

  // Passing Css to template
  styles  = {
    width: '18rem',
    'box-shadow': 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
    'margin-top': '10px'
  };

  newProduct : Product = {
    productName: '',
    description: '',
    price: 0,
    category: ''
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


  ngOnInit(): void {
  }

  onSearch(event: any){
    const typedValue = event.target.value;
    this.sendSearchEvent.emit(typedValue);
  }

  checkProducts(){
    // return this.products.length === 0;
  }

  checkProductPrice(price: number){    
    return price <= 40000
  }

  onClickAddToCart(){
    this.dataHandler.cartCount++;
  }
  
}
