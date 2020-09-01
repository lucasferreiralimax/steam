import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SteamComponent } from './steam.component';

@NgModule({
  declarations: [ SteamComponent ],
  exports: [ SteamComponent ],
  imports: [
    CommonModule
  ]
})
export class SteamModule { }
