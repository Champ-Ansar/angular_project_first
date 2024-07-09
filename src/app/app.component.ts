import { Component } from '@angular/core';

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
  }

  onClickSubmit(){
    console.log(this.productName);
  }
}
