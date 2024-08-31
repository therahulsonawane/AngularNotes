import { Component } from '@angular/core';

@Component({
  selector: 'app-style-binding',
  standalone: true,
  imports: [],
  templateUrl: './style-binding.component.html',
  styleUrl: './style-binding.component.css',
})
export class StyleBindingComponent {
  textColor = 'yellow';
  fontSize = '24px';
  backColor = 'gray';
  pTagBack = 'green';
}
