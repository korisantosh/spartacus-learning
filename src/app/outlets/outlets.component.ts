import { Component, ChangeDetectionStrategy, ViewEncapsulation, OnInit } from '@angular/core';

import { ActiveCartService, OrderEntry, Product } from '@spartacus/core';
import {
  CurrentProductService,
  ProductDetailOutlets,
} from '@spartacus/storefront';
import { Observable } from 'rxjs';
import { filter, map, switchMap } from 'rxjs/operators';


@Component({
  selector: 'app-outlets',
  templateUrl: './outlets.component.html',
  styleUrls: ['./outlets.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class OutletsComponent {
  outlets = ProductDetailOutlets;

  constructor(
    private currentProductService: CurrentProductService,
    private cartService: ActiveCartService
  ) { }

  private product$: Observable<Product | any > = this.currentProductService.getProduct().pipe(filter(Boolean));

  quantity$: Observable<number | any> = this.product$.pipe(
      switchMap((product: Product | any) => this.cartService.getEntry(product.code)),
      filter(Boolean)
    )
    .pipe(map((cartEntry: OrderEntry | any) => cartEntry.quantity));

  hasBrand(brand: string): Observable<boolean> {
    return this.product$.pipe(
      map(
        (p) =>
          !!p.categories.find(
            (c: { name: string; }) => c.name.toLowerCase() === brand.toLowerCase()
          )
      )
    );
  }
}
