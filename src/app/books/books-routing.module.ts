import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {BooksOverviewComponent} from './books-overview/books-overview.component';
import {BookDetailComponent} from './book-detail/book-detail.component';
import {BookloanCreateComponent} from './loans/bookloan-create/bookloan-create.component';
import {BookCreateComponent} from './book-create/book-create.component';

const booksRoutes: Routes = [
  {path: 'books', component: BooksOverviewComponent},
  {path: 'books/create', component: BookCreateComponent},
  {path: 'books/:bookId', component: BookDetailComponent},
  {path: 'books/borrow/:bookCopyId', component: BookloanCreateComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(booksRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class BooksRoutingModule {}
