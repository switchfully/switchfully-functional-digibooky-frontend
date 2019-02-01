import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Book} from './book.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { }

  getAllBooks(): Observable<Book[]> {
    return this.http.get<Book[]>('digibooky/api/as/bookmanagement/books');
  }

  searchBooks(searchCriterion: string, searchValue: string): Observable<Book[]> {
    const queryParams = {
      searchCriterion,
      searchValue
    };
    return this.http.get<Book[]>('digibooky/api/as/bookmanagement/books', {params: {...queryParams}});
  }

}
