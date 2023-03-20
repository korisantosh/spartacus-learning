import { NgModule } from '@angular/core';
import { translationChunksConfig, translations } from "@spartacus/assets";
import { FeaturesConfig, I18nConfig, OccConfig, provideConfig, SiteContextConfig } from "@spartacus/core";
import { defaultCmsContentProviders, layoutConfig, mediaConfig } from "@spartacus/storefront";
import { LayoutConfig } from '@spartacus/storefront/layout';

@NgModule({
  declarations: [],
  imports: [],
  providers:
    [
    provideConfig(layoutConfig),
    provideConfig(mediaConfig),
    ...defaultCmsContentProviders,
    provideConfig(<OccConfig>{
      backend: {
        occ: {
          baseUrl: 'https://ec2-43-205-75-181.ap-south-1.compute.amazonaws.com:9002/',
        }
      },
    }),
    provideConfig(<SiteContextConfig>{
      context: {
        currency: ['USD'],
        language: ['en'],
        baseSite: ['olm-spa'],
      },
    }),
    provideConfig(<I18nConfig>{
      i18n: {
        resources: translations,
        chunks: translationChunksConfig,
        fallbackLang: 'en'
      },
    }),
    provideConfig(<FeaturesConfig>{
      features: {
        level: '4.3'
      }
    }),
    provideConfig({
      layoutSlots: {
        header: {
          lg: {
            slots: [
              'SiteLogo',
              'SearchBox',
              'SiteLogin',
              'MiniCart',
              'NavigationBar',
            ],
          },
          slots: ['PreHeader', 'SiteLogo', 'SearchBox', 'MiniCart']
        },
      },
    } as LayoutConfig)
    ]
})
export class SpartacusConfigurationModule { }
