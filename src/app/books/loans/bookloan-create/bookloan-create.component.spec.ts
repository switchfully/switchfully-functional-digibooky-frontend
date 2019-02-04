import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookloanCreateComponent } from './bookloan-create.component';

describe('BookloanCreateComponent', () => {
  let component: BookloanCreateComponent;
  let fixture: ComponentFixture<BookloanCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookloanCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookloanCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
