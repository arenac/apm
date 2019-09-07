import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from 'src/api/products/product.service';

@Component({
  //selector: 'pm-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  
  pageTitle: string = "Product List!";
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;
  filteredProducts: IProduct[];

  _listFilter: string;
  products: IProduct[];
  errorMessage: any;
  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value:string) {
    this._listFilter = value;
    this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
  }

  constructor(private productService: ProductService) { }

  onRatingClicked(message: string): void {
    console.log(message);
    this.pageTitle = "Product List: " + message;
  }

  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: IProduct) =>
      product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1 ||
      product.description.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  ngOnInit(): void {
    this.productService.getProducts().subscribe({
      next: products => {
        this.products = products;
        this.filteredProducts = this.products;
      },
      error: err => this.errorMessage = err 
    });
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }
}
