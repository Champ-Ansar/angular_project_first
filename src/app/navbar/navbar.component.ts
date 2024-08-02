import { Component, EventEmitter, Output } from "@angular/core";

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

    constructor() {
        // console.log(this.currDate);
        
        // console.log("Navbar component");
        // const name = "Ansar";
        // const greet = `Welcome to Itvedant, ${name}`;
        // console.log(greet);
        // const storeName = "store";
        // console.log(this.storeName);
        

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
        this.sendSearchEvent.emit(typedValue);
    }

    
}