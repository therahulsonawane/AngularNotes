import { CommonModule, NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-class-directive',
  standalone: true,
  // imports: [CommonModule],
  imports: [NgClass],
  templateUrl: './ng-class-directive.component.html',
  styleUrl: './ng-class-directive.component.css',
})
export class NgClassDirectiveComponent {
  customCss = 'custom-css';

  cssObj = { class1: true, class2: true };

  theme = {
    light: true,
    dark: false,
  };

  changeTheme() {
    this.theme.light = !this.theme.light;
    this.theme.dark = !this.theme.dark;
  }
}
