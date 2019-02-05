import {Injectable} from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {environment} from '../../environments/environment';
import {catchError} from 'rxjs/operators';
import {ErrorService} from './error.service';

@Injectable()
export class BackendInterceptor implements HttpInterceptor {

  constructor(private errorService: ErrorService){

  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.url.startsWith('digibooky/api')) {
      req = req.clone({
        url: environment.baseUrl + req.url,
      });
    }
    return next.handle(req).pipe(catchError((error: any, caught: Observable<HttpEvent<any>>) => {
      this.handleError(error);
      return of(error);
    }) as any);
  }

  private handleError(err: HttpErrorResponse): Observable<any> {
    if (err.status >= 400 && err.status < 600 || err.status === 0 ) {
      console.log(err.statusText);
      this.errorService.throw(err.statusText);
      return of(err.message);
    }
    throw err;
  }

}
