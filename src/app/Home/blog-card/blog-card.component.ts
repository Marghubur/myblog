import { Component, Input, input } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { SliceWordsPipe } from '../../util/slice-words.pipe';

@Component({
  selector: 'app-blog-card',
  standalone: true,
  imports: [DatePipe, CommonModule, SliceWordsPipe],
  templateUrl: './blog-card.component.html',
  styleUrl: './blog-card.component.scss'
})
export class BlogCardComponent {
  @Input() data: any;
  @Input() className: string = "";
  @Input() sliceWord: number = 18;
  chipClasses = ['chip-1', 'chip-2', 'chip-3', 'chip-4', 'chip-5', 'chip-6', 'chip-7', 'chip-8'];

  getRandomColor(): string {
    const randomIndex = Math.floor(Math.random() * this.chipClasses.length);
    return this.chipClasses[randomIndex];
  }
  
}
