import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductListComponent } from './product/product-list.component';
import { ConverToSpacesPipe } from './shared/convert-to-spaces.pipe';
import { StarComponent } from './shared/start.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ConverToSpacesPipe,
    StarComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
