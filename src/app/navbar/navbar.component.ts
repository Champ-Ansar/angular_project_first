import { Component, EventEmitter, Output } from "@angular/core";
import { DataHandlerService } from "../data-handler.service";
import { Product } from "../product";

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css'],
    // template: `
    // <h1>This is my Navbar</h1>
    //  <p></p>
    //  `,
    // styles: [
    //     `h1{
    //     color: red
    //     }; 
    //     `
    // ],
})

export class NavbarComponent {

    navTitle :string = "Foodies"; 
    navbarColor : string = "#2A55E5"
    currDate = new Date();
    @Output() sendSearchEvent = new EventEmitter<any>();
    // tempData !: Product[];
    allProducts !: any;
    constructor(private dataHandler: DataHandlerService) {
        // console.log(this.currDate);
        this.allProducts = dataHandler.products;
        

    }

    checkBlue(){
        // console.log(this.navbarColor === "#2A55E5");
        
        return this.navbarColor === "#2A55E5"; 
    }
    
    checkDark(){
        // console.log(this.navbarColor === "black");
        return this.navbarColor === "black";
    }

    onClickToggle(){
        this.navbarColor = this.navbarColor === "#2A55E5" ? "black" : "#2A55E5";
    }

    onSearch(event: any){
        
        const typedValue = event.target.value;
        
        this.dataHandler.products = this.allProducts.filter((product : any)=>{
            return product.productName.includes(typedValue);
        })
    }

    
}