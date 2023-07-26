import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiciosRoutingModule } from './servicios-routing.module';
import { ServiciosComponent } from './servicios/servicios.component';


@NgModule({
  declarations: [
    ServiciosComponent
  ],
  imports: [
    CommonModule,
    ServiciosRoutingModule
  ],
  exports: [
    ServiciosComponent
  ]
})
export class ServiciosModule { }
