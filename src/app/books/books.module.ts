import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BooksRoutingModule} from './books-routing.module';
import {BooksOverviewComponent} from './books-overview/books-overview.component';
import {BookService} from './shared/book.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    BooksOverviewComponent
  ],
  providers: [
    BookService
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    BooksRoutingModule
  ]
})
export class BooksModule { }
