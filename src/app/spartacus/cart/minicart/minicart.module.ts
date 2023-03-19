import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { translationChunksConfig, translations } from "@spartacus/assets";
import { TranslationService } from '@spartacus/core';
import { IconModule } from '@spartacus/storefront';



import {
  CmsConfig,
  I18nModule,
  provideDefaultConfig,
  UrlModule,
} from '@spartacus/core';

import { MiniCartComponent } from './minicart.component';

@NgModule({
  declarations: [
    MiniCartComponent
  ],
  imports: [CommonModule, IconModule],
  providers: [
    provideDefaultConfig(<CmsConfig>{
      cmsComponents: {
        MiniCartComponent: {
          component: MiniCartComponent,
        },
      },
    }),
  ],
  exports: [MiniCartComponent]
})
export class MinicartModule { }
