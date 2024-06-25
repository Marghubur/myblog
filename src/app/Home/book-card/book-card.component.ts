import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Booklist } from '../book-list/book-list.component';
import { Router } from '@angular/router';
import { ViewBooks } from '../../Provider/constrant';

@Component({
  selector: 'app-book-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './book-card.component.html',
  styleUrl: './book-card.component.scss'
})
export class BookCardComponent {
  @Input() data: any;

  constructor(private router: Router) {}

  viewBook(data: Booklist) {
    this.router.navigate(['/' + ViewBooks], {queryParams: {BookId: data.BookId}});
  }
}
