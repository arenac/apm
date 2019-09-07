import { NgModule } from '@angular/core';

import { ProductListComponent } from '../product/product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { ConverToSpacesPipe } from '../shared/convert-to-spaces.pipe';
import { SharedModule } from '../shared/shared.module';
import { ProductRoutingModule } from './product-routing.module';


@NgModule({
  imports: [
    SharedModule,
    ProductRoutingModule
  ],
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ConverToSpacesPipe,
  ]
})
export class ProductModule { }
