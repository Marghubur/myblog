import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AjaxService, ResponseModel } from '../../service/ajax.service';
import { Booklist } from '../book-list/book-list.component';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-view-book',
  standalone: true,
  imports: [],
  templateUrl: './view-book.component.html',
  styleUrl: './view-book.component.scss'
})
export class ViewBookComponent implements OnInit {
  isPageReady: boolean = false;
  bookId: number = 0;
  currentBook: Booklist = {BookId: 0, Content: "", ImgUrl: "", Link: "", Title: ""};
  bookUrl: SafeUrl = "";
  
  constructor(private activatedRoute: ActivatedRoute,
            private http: AjaxService,
            private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((x: any) => {
      this.bookId = Number(x.BookId);
    })

    if (this.bookId > 0)
      this.loadBook();
  }

  loadBook() {
    this.isPageReady = false;
    this.http.get(`Book/GetBookById/${this.bookId}`).subscribe({
      next: (res:ResponseModel) => {
        if (res.ResponseBody){
          this.currentBook = res.ResponseBody;
          this.bookUrl = this.sanitizer.bypassSecurityTrustResourceUrl(res.ResponseBody.Link);
          this.isPageReady = true;
        }
      }, error: err => {
        console.log(err);
        this.isPageReady = true;
      },
    })
  }


}
