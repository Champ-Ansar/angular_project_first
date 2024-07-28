import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-add-new-product',
  templateUrl: './add-new-product.component.html',
  styleUrls: ['./add-new-product.component.css']
})
export class AddNewProductComponent implements OnInit {

  @Output() sendDataEvent = new EventEmitter<any>();

  newProduct: Product = {
    productName: '',
    description: '',
    price: 0,
    category: ''
  }

  constructor() { }

  ngOnInit(): void {
  }

  onClickAddNewProduct()
  {
    this.sendDataEvent.emit(this.newProduct);
  }

}
