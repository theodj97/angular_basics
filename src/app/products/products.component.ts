import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../models/Product';

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  inputs: ['_products'],
})
export class ProductsComponent implements OnInit {
  @Input('productList') _products: Array<Product> | undefined;
  @Output('favourites') _favourites = new EventEmitter();

  ngOnInit(): void {
    this._favourites.emit({
      totalFavs: this._products!.filter((p) => p.isFavourite).length,
    });
  }

  setFavourite(product: Product) {
    this._products![this._products!.indexOf(product)].isFavourite =
      !product.isFavourite;

    this._favourites.emit({
      totalFavs: this._products!.filter((p) => p.isFavourite).length,
    });
  }
}
