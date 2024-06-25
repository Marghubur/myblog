import { Component } from '@angular/core';
import { ThemeService } from '../../service/theme.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  isNightMode: boolean = false;

  // constructor(private theme: ThemeService) {}

  changeMode() {
    this.isNightMode = !this.isNightMode;
    // this.theme.toggleTheme();
  }
}
