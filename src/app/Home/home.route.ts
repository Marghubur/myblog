import { Route } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { Books, Home, Videos, ViewBooks } from "../Provider/constrant";

export const Home_Route: Route[] = [
    {path: "", loadComponent: () => import("./home/home.component").then(m => m.HomeComponent)},
    {path: Home, loadComponent: () => import("./home/home.component").then(m => m.HomeComponent)},
    {path: Videos, loadComponent: () => import("./videos/videos.component").then(m => m.VideosComponent)},
    {path: Books, loadComponent: () => import("./book-list/book-list.component").then(m => m.BookListComponent)},
    {path: ViewBooks, loadComponent: () => import("./view-book/view-book.component").then(m => m.ViewBookComponent)}
]