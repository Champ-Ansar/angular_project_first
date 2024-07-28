import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchProducts'
})
export class SearchProductsPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    // console.log(args);
    
    return value.filter((val : any)=>{
      return val.productName.toLowerCase().includes(args[0].toLowerCase())
    });
  }

}
