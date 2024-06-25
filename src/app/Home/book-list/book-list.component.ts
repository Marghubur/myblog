import { Component, OnInit } from '@angular/core';
import { BookCardComponent } from '../book-card/book-card.component';
import { AjaxService, ResponseModel } from '../../service/ajax.service';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [BookCardComponent],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.scss'
})
export class BookListComponent implements OnInit {

  isPageReady: boolean = true;
  booklist: Array<Booklist> = [];

  constructor(private http: AjaxService) {}

  ngOnInit(): void {
    this.isPageReady = false;
    this.http.get("Book/GetAllBooks").subscribe({
      next: (res: ResponseModel) => {
        this.booklist = res.ResponseBody;
        this.isPageReady = true;
      }, 
      error: err => {
        console.log(err);
        this.isPageReady = true;
      }
    })
  }
}

export interface Booklist {
  BookId: number,
  ImgUrl: string,
  Title: string,
  Content: string,
  Link: string
}