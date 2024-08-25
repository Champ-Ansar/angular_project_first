import { Component } from '@angular/core';
import { Product } from './product';
import { interval, Observable, of } from 'rxjs';
import { filter, map, take } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title !: string;
  showSpinner :boolean = true;

  tempProducts !: any;

  ngOnInit(){

    const timerInterval$  = interval(1000);
    // console.log(timerInterval$);
    const newTimer$ = timerInterval$.pipe(
      take(1)
    );
    
    newTimer$.subscribe(
      val => console.log(val),
      err => console.log(err),
      () => this.showSpinner = false   
    );
    

    // const obs$ = new Observable(observer =>{
    //   // console.log(observer);
    //   observer.next(2);

    //   // setTimeout(()=>{
    //   //   observer.next(5);
    //   // }, 2000);
    //     observer.next(5);

    //   observer.next(6);
    //   // throw new TypeError('Error message');
    //   observer.next(10);
    //   observer.complete();
      
    // });

    // const obs$ = of(1, 2, 3, 6, 10, 12);
    // console.log(obs$);
    
    // const newObs$ = obs$.pipe(
    //   map((val)=>{
    //     return val**2; 
    //   }), // 1, 4, 9, 36, 100, 144
    //   filter((val)=>{
    //     return val % 2 === 0
    //   }) //  4, 36, 100, 144
    // );

    // const filtered$ = squared$.pipe(
    //   filter((val)=>{
    //     return val % 2 === 0
    //   })
    // );

    // console.log(squared$);
    // newObs$.subscribe(
    //   val => console.log(val),
    //   err => console.log('err = ' + err),
    //   ()=> console.log("complete")    
    // );

    // obs$.subscribe(
    //   val => console.log(val),
    //   err => console.log('err = ' + err),
    //   ()=> console.log("complete")    
    // )
    
    
  }


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
    // this.title = "My Store"
    // this.tempProducts = this.products;

    // // console.log([1, 2, 3, 4]);
    
    // const obs = new Observable(observer=>{
    //   // next: 1;
    //   // next: 2;
    //   // next: 3;
    //   // next: 4;
    //   let counter = 0;
    //   setInterval(()=>{
    //     observer.next(counter)
    //     counter++
    //   }, 2000)
    //   // observer.next(2)
    //   // observer.next(3)
    //   // observer.next(4)
      
    // });
    // obs.subscribe((num : any)=>{
    //   console.log(num);
      
    // });
    
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
