import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Book} from './book.model';
import {Bookloan} from './bookloan.model';
import {MemberService} from '../../members/shared/member.service';
import {Author} from './author.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient, private memberService: MemberService) { }

  getAllBooks(): Observable<Book[]> {
    return this.http.get<Book[]>('digibooky/api/as/bookmanagement/books');
  }

  getAllAuthors(): Observable<Author[]> {
    return this.http.get<Author[]>('digibooky/api/as/bookmanagement/books/authors');
  }

  searchBooks(searchCriterion: string, searchValue: string): Observable<Book[]> {
    const queryParams = {
      searchCriterion,
      searchValue
    };
    return this.http.get<Book[]>('digibooky/api/as/bookmanagement/books', {params: {...queryParams}});
  }

  createBookloan(bookCopyId: string): Observable<Bookloan> {
    return this.http.post<Bookloan>('digibooky/api/as/lending/bookloans', {bookCopyId, memberId: this.memberService.currentMember!.id});
  }

  createBook(authorId: string, isbn: string, title: string): Observable<Book> {
    return this.http.post<Book>('digibooky/api/as/bookmanagement/books', {authorId, isbn, title});
  }

  getBook(bookId: string) {
    return this.http.get<Book>(`digibooky/api/as/bookmanagement/books/${bookId}`);
  }
}
