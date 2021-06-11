import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MapshuecasPageRoutingModule } from './mapshuecas-routing.module';

import { MapshuecasPage } from './mapshuecas.page';
///
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MapshuecasPageRoutingModule
  ],
  declarations: [MapshuecasPage]
})
export class MapshuecasPageModule {}
