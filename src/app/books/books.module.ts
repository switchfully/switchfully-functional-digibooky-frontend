import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BooksRoutingModule} from './books-routing.module';
import {BooksOverviewComponent} from './books-overview/books-overview.component';

@NgModule({
  declarations: [
    BooksOverviewComponent
  ],
  imports: [
    CommonModule,
    BooksRoutingModule
  ]
})
export class BooksModule { }
