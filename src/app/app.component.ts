import {Component, OnInit} from '@angular/core';
import {ErrorService} from './interceptors/error.service';

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  errorMessage = '';
  shouldShowErrorMessage = false;

  constructor(private errorService: ErrorService) {
  }

  ngOnInit(): void {
    this.errorService.error$.subscribe(value => {
        this.errorMessage = value;
        this.shouldShowErrorMessage = true;
      }
    );
  }

  disableErrorMessage(): void {
    this.shouldShowErrorMessage = false;
  }

}
