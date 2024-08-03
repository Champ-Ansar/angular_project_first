import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Product } from '../product';
import { DataHandlerService } from '../data-handler.service';

@Component({
  selector: 'app-add-new-product',
  templateUrl: './add-new-product.component.html',
  styleUrls: ['./add-new-product.component.css']
})
export class AddNewProductComponent implements OnInit {

  // @Output() sendDataEvent = new EventEmitter<any>();

  newProduct: Product = {
    productName: '',
    description: '',
    price: 0,
    category: ''
  }

  constructor(private dataHandler: DataHandlerService) { }

  ngOnInit(): void {
  }

  onClickAddNewProduct()
  {
    this.dataHandler.products.push(this.newProduct);
    // this.sendDataEvent.emit(this.newProduct);
    this.newProduct = {
      productName: '',
      description: '',
      price: 0,
      category: ''
    }
  }

}
