import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appDropdownShow]'
})
export class DropdownShowDirective {

  @Input() appDropdownShow:any;

  constructor(private el: ElementRef) {
    // console.log(el);
    // el.nativeElement.style.display = 'block';
    console.log(this.appDropdownShow);
    
   }

   ngDoCheck(){
    if(this.appDropdownShow){
      this.el.nativeElement.style.display = 'block';
    }else{
      this.el.nativeElement.style.display = 'none';
    }
   }

}
