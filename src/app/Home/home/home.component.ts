import { Component, OnInit } from '@angular/core';
import { BlogCardComponent } from '../blog-card/blog-card.component';
import { ScrollTopButtonComponent } from '../scroll-top-button/scroll-top-button.component';
import { AjaxService, ResponseModel } from '../../service/ajax.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BlogCardComponent, ScrollTopButtonComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit  {
  isPageReady: boolean = false;
  // RecentBlogs: Array<Blog> = [
  //   {
  //     PostedOn: new Date("2024-06-01"),
  //     Title: "Exploring Angular Directives",
  //     Images: ["https://plus.unsplash.com/premium_photo-1685086785636-2a1a0e5b591f?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
  //     Author: "Alice Johnson",
  //     Description: "A deep dive into Angular directives and their usage in modern web applications. A deep dive into Angular directives and their usage in modern web applications. A deep dive into Angular directives and their usage in modern web applications.",
  //     Tags: ["Angular", "Directives", "Frontend"],
  //     BlogId: 1,
  //     Rating: 4.7,
  //     IsVisible: true,
  //     Likes: 200,
  //     ReadTime: 20,
  //     AuthorId: 101,
  //     CatagoryId: 201,
  //     AuthorImage: "alice-johnson.jpg",
  //     Designation: "Frontend Developer"
  //   },
  //   {
  //     PostedOn: new Date("2024-05-30"),
  //     Title: "Mastering CSS Grid Layouts",
  //     Images: ["https://images.unsplash.com/photo-1603468620905-8de7d86b781e?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
  //     Author: "Bob Williams",
  //     Description: "Learn how to create complex layouts using CSS Grid and take your web design skills to the next level.",
  //     Tags: ["CSS", "Layouts", "Web Design"],
  //     BlogId: 2,
  //     Rating: 4.9,
  //     IsVisible: true,
  //     Likes: 180,
  //     ReadTime: 18,
  //     AuthorId: 102,
  //     CatagoryId: 202,
  //     AuthorImage: "bob-williams.jpg",
  //     Designation: "UI/UX Designer"
  //   },
  //   {
  //     PostedOn: new Date("2024-05-28"),
  //     Title: "Introduction to React Hooks",
  //     Images: ["https://media.istockphoto.com/id/506176606/photo/man-pushing-virtual-programming-language-button.jpg?s=2048x2048&w=is&k=20&c=aa_GwZXbK6mW1XsMGysR2X_-tlgNqIgqnF8DVPfG0Pw="],
  //     Author: "Charlie Brown",
  //     Description: "An overview of React Hooks and how they simplify state management and side effects in React applications.",
  //     Tags: ["React", "Hooks", "State Management"],
  //     BlogId: 3,
  //     Rating: 4.6,
  //     IsVisible: true,
  //     Likes: 220,
  //     ReadTime: 22,
  //     AuthorId: 103,
  //     CatagoryId: 203,
  //     AuthorImage: "charlie-brown.jpg",
  //     Designation: "Full Stack Developer"
  //   },
  //   {
  //     PostedOn: new Date("2024-05-25"),
  //     Title: "Responsive Web Design Techniques",
  //     Images: ["responsive-design.png"],
  //     Author: "Diana Miller",
  //     Description: "Explore various techniques for creating responsive web designs that work seamlessly across different devices.",
  //     Tags: ["Web Design", "Responsive Design", "CSS"],
  //     BlogId: 4,
  //     Rating: 4.8,
  //     IsVisible: true,
  //     Likes: 250,
  //     ReadTime: 25,
  //     AuthorId: 104,
  //     CatagoryId: 204,
  //     AuthorImage: "diana-miller.jpg",
  //     Designation: "Frontend Engineer"
  //   },
  //   {
  //     PostedOn: new Date("2024-05-22"),
  //     Title: "Node.js Best Practices",
  //     Images: ["nodejs.png"],
  //     Author: "Ethan Clark",
  //     Description: "Best practices for writing scalable, maintainable, and performant Node.js applications.",
  //     Tags: ["Node.js", "Best Practices", "Backend"],
  //     BlogId: 5,
  //     Rating: 4.5,
  //     IsVisible: true,
  //     Likes: 190,
  //     ReadTime: 19,
  //     AuthorId: 105,
  //     CatagoryId: 205,
  //     AuthorImage: "ethan-clark.jpg",
  //     Designation: "Backend Developer"
  //   }
  // ];

  RecentBlogs: Array<Blog> = [];
  constructor(private http: AjaxService) {}

  ngOnInit () {
    this.isPageReady = false;
    this.http.get("Blog/GetAllPost").subscribe({
      next: (response: ResponseModel) => {
        if (response.ResponseBody) {
          this.RecentBlogs = response.ResponseBody;
          this.isPageReady = true;
        }
      },
      error: err => {
        console.error(err);
      }
    })
  }




}


export interface Blog {
  PostedOn: Date,
  Title: string,
  Images: Array<string>,
  Author: string,
  Description: string,
  Tags: Array<string>,
  BlogId: number,
  Rating: number,
  IsVisible: boolean,
  Likes: number,
  ReadTime: number,
  AuthorId: number,
  CatagoryId: number, 
  AuthorImage: string,
  Designation: string
}
