import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './product';

@Pipe({
  name: 'customPipe',
})
export class CustomPipePipe implements PipeTransform {

  // [40000,]
  transform(value: Product[], ...args: any[]): Product[] {
    // return ;
    if(args.length === 0) {
      return value;
    }
    return value.filter((val:any)=>{
      return val.price > args[0]
    })
  }

}
