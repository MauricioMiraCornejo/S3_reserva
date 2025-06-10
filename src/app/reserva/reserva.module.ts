import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ReservaPage } from './reserva.page';
import { ReservaPageRoutingModule } from './reserva-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReservaPageRoutingModule
  ],
  declarations: [ReservaPage]
})
export class ReservaPageModule {}