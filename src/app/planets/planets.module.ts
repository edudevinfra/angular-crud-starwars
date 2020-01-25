import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { GenericModule } from '../generic/generic.module';
import { PlanetsListComponent } from './planets-list/planets-list.component';




@NgModule({
  declarations: [PlanetsListComponent],
  imports: [
    CommonModule,
    GenericModule,
    HttpClientModule
  ]
})
export class PlanetsModule { }
