import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActiveCartService, TranslationService } from '@spartacus/core';
import { Observable } from 'rxjs';
import { filter, map, startWith } from 'rxjs/operators';


@Component({
  selector: 'cx-mini-cart',
  templateUrl: './minicart.component.html',
  styleUrls: ['./minicart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MiniCartComponent {

  quantity$: Observable<number> = this.cartService.getActive().pipe(
    startWith({ deliveryItemsQuantity: 0 }),
    map(cart => cart.deliveryItemsQuantity || 0)
  );

  total$: Observable<string | undefined> = this.cartService.getActive().pipe(
    filter(cart => !!cart.totalPrice),
    map(cart => cart.totalPrice?.formattedValue)
  );

  constructor(protected cartService: ActiveCartService, protected translation: TranslationService) {}

  ngOnInit(): void {
  }

}
