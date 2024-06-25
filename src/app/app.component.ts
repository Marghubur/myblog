import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ThemeService } from './service/theme.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'NewBlog';

  // constructor(private theme: ThemeService){}

  ngOnInit(): void {
    // this.theme.activeTheme$.subscribe(th => {
    //   const linkElement = document.getElementById('theme-link')?.setAttribute('href', th.stylesUrl);
    // })
  }

}
