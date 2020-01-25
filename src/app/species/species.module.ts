import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { GenericModule } from '../generic/generic.module';
import { SpeciesListComponent } from './species-list/species-list.component';



@NgModule({
  declarations: [SpeciesListComponent],
  imports: [
    CommonModule,
    GenericModule,
    HttpClientModule
  ]
})
export class SpeciesModule { }
