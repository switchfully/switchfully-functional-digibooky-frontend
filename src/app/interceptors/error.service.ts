import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  private detectedErrors = new Subject<string>();

  throw(errorText: string): void {
    switch (errorText) {
      case 'Unknown Error':
        this.detectedErrors.next('Uknown error, most likely the backend server is not (yet) responding (try again in 30 seconds).');
        break;
    }

  }


  get error$(): Subject<string> {
    return this.detectedErrors;
  }
}
