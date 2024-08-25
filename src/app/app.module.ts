import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PracticeComponent } from './practice/practice.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { FormsModule } from '@angular/forms';
import { CustomPipePipe } from './custom-pipe.pipe';
import { SearchProductsPipe } from './search-products.pipe';
import { AddNewProductComponent } from './add-new-product/add-new-product.component';
import { DropdownShowDirective } from './dropdown-show.directive';
import { SpinnerComponent } from './spinner/spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    PracticeComponent,
    NavbarComponent,
    ProductListComponent,
    CustomPipePipe,
    SearchProductsPipe,
    AddNewProductComponent,
    DropdownShowDirective,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
