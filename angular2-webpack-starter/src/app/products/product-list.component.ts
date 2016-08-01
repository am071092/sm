import { Component } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
templateUrl: './product-list.component.html'
})

export class ProductListComponent {
    products: IProduct[];

    constructor(private _productService: ProductService) {

    }

    ngOnInit(): void {
        this._productService.getProducts()
            .subscribe(
                products => this.products = products
            )
    }
}
