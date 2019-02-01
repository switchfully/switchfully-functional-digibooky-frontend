import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {BooksOverviewComponent} from './books-overview/books-overview.component';
import {BookDetailComponent} from './book-detail/book-detail.component';

const booksRoutes: Routes = [
  {path: 'books', component: BooksOverviewComponent},
  {path: 'books/:bookId', component: BookDetailComponent}
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
