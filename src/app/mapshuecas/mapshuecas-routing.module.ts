import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MapshuecasPage } from './mapshuecas.page';

const routes: Routes = [
  {
    path: '',
    component: MapshuecasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MapshuecasPageRoutingModule {}
