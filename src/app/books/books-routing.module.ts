import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

const booksRoutes: Routes = [

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
