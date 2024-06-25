import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private activeThemeSubject = new BehaviorSubject<Theme>({
    name: 'light',
    stylesUrl: 'css/light-theme.scss'
  });
  // activeTheme$ = this.activeThemeSubject.asObservable();

  // toggleTheme() {
  //   const currentTheme = this.activeThemeSubject.getValue();
  //   const newTheme = currentTheme.name === 'light' ? 'dark' : 'light';
  //   // this.activeThemeSubject.next({
  //   //   name: newTheme,
  //   //   stylesUrl: `css/${newTheme}-theme.scss`
  //   // });

  //   const themeLink = document.getElementById('theme-link');
  //   if (themeLink) {
  //     themeLink.setAttribute('href', `assets/${newTheme}-theme.css`);
  //   }
  // }
}

interface Theme {
  name: string;
  stylesUrl: string;
}