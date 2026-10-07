import { Component, OnInit } from '@angular/core';
import {switchMap} from 'rxjs/operators';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Observable} from 'rxjs';
import {BookService} from '../../shared/book.service';
import {Bookloan} from '../../shared/bookloan.model';

@Component({
  selector: 'app-bookloan-create',
  standalone: false,
  templateUrl: './bookloan-create.component.html',
  styleUrls: ['./bookloan-create.component.css']
})
export class BookloanCreateComponent implements OnInit {

  bookloan$!: Observable<Bookloan>;

  constructor(private route: ActivatedRoute, private bookService: BookService) { }

  ngOnInit() {
    this.bookloan$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.bookService.createBookloan(params.get('bookCopyId')!))
    );
  }

}
