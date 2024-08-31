import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-for-directive',
  standalone: true,
  imports: [NgFor],
  templateUrl: './ng-for-directive.component.html',
  styleUrl: './ng-for-directive.component.css',
})
export class NgForDirectiveComponent {
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
}
