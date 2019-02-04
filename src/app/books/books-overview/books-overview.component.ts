import {Component, OnInit} from '@angular/core';
import {BookService} from '../shared/book.service';
import {Observable} from 'rxjs';
import {Book} from '../shared/book.model';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-books-overview',
  templateUrl: './books-overview.component.html',
  styleUrls: ['./books-overview.component.css']
})
export class BooksOverviewComponent implements OnInit {

  books$: Observable<Book[]>;
  serverSearchForm: FormGroup;

  constructor(private bookService: BookService) {
  }

  ngOnInit() {
    this.books$ = this.bookService.getAllBooks();
    this.serverSearchForm = new FormGroup({
      searchValue: new FormControl('', Validators.required),
      searchCriterion: new FormControl('', Validators.required),
    });
  }

  onSubmit() {
    this.books$ = this.bookService.searchBooks(this.serverSearchForm.value.searchCriterion.toUpperCase(),
      this.serverSearchForm.value.searchValue);
  }

  clearSearchFilters() {
    this.books$ = this.bookService.getAllBooks();
    this.serverSearchForm.reset();
  }

}
