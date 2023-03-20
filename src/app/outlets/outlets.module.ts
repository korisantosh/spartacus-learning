import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  IconModule,
  OutletRefModule,
  PageComponentModule,
} from '@spartacus/storefront';

import { OutletsComponent } from './outlets.component';



@NgModule({
  declarations: [
    OutletsComponent
  ],
  imports: [CommonModule, IconModule, OutletRefModule, PageComponentModule],
  exports: [
    OutletsComponent
  ]
})
export class BootcampOutletsModule { }
