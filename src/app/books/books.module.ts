import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BooksRoutingModule} from './books-routing.module';
import {BooksOverviewComponent} from './books-overview/books-overview.component';
import {BookService} from './shared/book.service';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookloanCreateComponent } from './loans/bookloan-create/bookloan-create.component';

@NgModule({
  declarations: [
    BooksOverviewComponent,
    BookDetailComponent,
    BookloanCreateComponent
  ],
  providers: [
    BookService
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    BooksRoutingModule
  ]
})
export class BooksModule { }
