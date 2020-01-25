import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { GenericModule } from '../generic/generic.module';
import { StarshipsListComponent } from './starships-list/starships-list.component';



@NgModule({
  declarations: [StarshipsListComponent],
  imports: [
    CommonModule,
    GenericModule,
    HttpClientModule
  ]
})
export class StarshipsModule { }
