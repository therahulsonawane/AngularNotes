import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-if-directive',
  standalone: true,
  imports: [NgIf],
  templateUrl: './ng-if-directive.component.html',
  styleUrl: './ng-if-directive.component.css',
})
export class NgIfDirectiveComponent {
  isShow = true;

  age = 21;
}
