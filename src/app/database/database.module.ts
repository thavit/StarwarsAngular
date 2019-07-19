import { NgModule, Optional, SkipSelf } from '@angular/core';

import { DexieService } from './dexie.service';

@NgModule({
  declarations: [],
  imports: [],
  providers: [
    DexieService,
  ],
  bootstrap: []
})
export class DatabaseModule {
  constructor(@Optional() @SkipSelf() parentModule: DatabaseModule) {
    if (parentModule) {
      throw new Error(
        'DatabaseModule is already loaded. Import it in the AppModule only');
    }
  }
}
