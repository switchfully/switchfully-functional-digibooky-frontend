import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Book} from '../shared/book.model';
import {BookService} from '../shared/book.service';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

  book$: Observable<Book>;

  constructor(private bookService: BookService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.book$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.bookService.getBook(params.get('bookId')))
    );
  }

}
