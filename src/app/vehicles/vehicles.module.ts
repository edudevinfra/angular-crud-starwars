import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { GenericModule } from '../generic/generic.module';
import { VehiclesListComponent } from './vehicles-list/vehicles-list.component';



@NgModule({
  declarations: [VehiclesListComponent],
  imports: [
    CommonModule,
    GenericModule,
    HttpClientModule
  ]
})
export class VehiclesModule { }
