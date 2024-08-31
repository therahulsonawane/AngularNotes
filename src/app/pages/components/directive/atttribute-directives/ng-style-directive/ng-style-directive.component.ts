import { NgFor, NgStyle } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-style-directive',
  standalone: true,
  imports: [NgStyle, NgFor],
  templateUrl: './ng-style-directive.component.html',
  styleUrl: './ng-style-directive.component.css',
})
export class NgStyleDirectiveComponent {
  stylesObj = {
    'background-color': 'green',
    color: 'white',
    'font-size': '24px',
    padding: '20px',
    'margin-bottom': '30px',
  };

  persons = [
    {
      name: 'John Doe',
      age: 21,
      city: 'Pune',
    },
    {
      name: 'omkar',
      age: 25,
      city: 'kolhapur',
    },
    {
      name: 'Raj',
      age: 22,
      city: 'Mumbai',
    },
    {
      name: 'ram',
      age: 21,
      city: 'Pune',
    },
    {
      name: 'guru',
      age: 21,
      city: 'Sangli',
    },
  ];

  getColor = (city: string) => {
    switch (city) {
      case 'Pune':
        return 'blue';
      case 'kolhapur':
        return 'red';
      case 'Mumbai':
        return 'yellow';
      default:
        return 'grey';
    }
  };
}
