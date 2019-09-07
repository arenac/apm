import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ProductListComponent } from '../product/product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { ConverToSpacesPipe } from '../shared/convert-to-spaces.pipe';
import { StarComponent } from '../shared/start.component';
import { ProductDetailGuard } from './product-detail.guard';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      { path: 'products', component: ProductListComponent },
      { path: 'products/:id',
        canActivate: [ProductDetailGuard],
        component: ProductDetailComponent },
    ]),
    SharedModule
  ],
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ConverToSpacesPipe,
    StarComponent
  ]
})
export class ProductModule { }
