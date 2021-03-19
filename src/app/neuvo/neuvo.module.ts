import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NeuvoPageRoutingModule } from './neuvo-routing.module';

import { NeuvoPage } from './neuvo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NeuvoPageRoutingModule
  ],
  declarations: [NeuvoPage]
})
export class NeuvoPageModule {}
