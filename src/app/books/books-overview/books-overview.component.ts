import { Component, OnInit } from '@angular/core';
import {BookService} from '../shared/book.service';
import {Observable} from 'rxjs';
import {Book} from '../shared/book.model';

@Component({
  selector: 'app-books-overview',
  templateUrl: './books-overview.component.html',
  styleUrls: ['./books-overview.component.css']
})
export class BooksOverviewComponent implements OnInit {

  books$: Observable<Book[]>;

  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.books$ = this.bookService.getAllBooks();
  }

}
