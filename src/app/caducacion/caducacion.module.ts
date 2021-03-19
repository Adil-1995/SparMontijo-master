import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CaducacionPageRoutingModule } from './caducacion-routing.module';

import { CaducacionPage } from './caducacion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CaducacionPageRoutingModule
  ],
  declarations: [CaducacionPage]
})
export class CaducacionPageModule {}
