import {Component, OnInit} from '@angular/core';
import {BookService} from '../shared/book.service';
import {Author} from '../shared/author.model';
import {Observable} from 'rxjs';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {tap} from 'rxjs/operators';

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.css']
})
export class BookCreateComponent implements OnInit {

  authors$: Observable<Author[]>;
  bookCreationForm: FormGroup;

  constructor(private bookService: BookService, private router: Router) {
  }

  ngOnInit() {
    this.authors$ = this.bookService.getAllAuthors();
    this.bookCreationForm = new FormGroup({
      title: new FormControl('', Validators.required),
      authorId: new FormControl('', Validators.required),
      isbn: new FormControl('', Validators.required)
    });
  }

  onSubmit(): void {
    this.bookService.createBook(
      this.bookCreationForm.controls.authorId.value,
      this.bookCreationForm.controls.isbn.value,
      this.bookCreationForm.controls.title.value,
    ).subscribe(book => this.router.navigate([`/books/${book.id}`]));
  }

}
