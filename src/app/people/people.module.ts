import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { GenericModule } from '../generic/generic.module';
import { PeopleListComponent } from './people-list/people-list.component';



@NgModule({
  declarations: [PeopleListComponent],
  imports: [
    CommonModule,
    GenericModule,
    HttpClientModule
  ],
  exports:[PeopleListComponent]

})
export class PeopleModule { }
