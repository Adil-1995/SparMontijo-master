import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NeuvoPage } from './neuvo.page';

const routes: Routes = [
  {
    path: '',
    component: NeuvoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NeuvoPageRoutingModule {}
