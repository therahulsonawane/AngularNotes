import { Component } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  standalone: true,
  imports: [],
  templateUrl: './property-binding.component.html',
  styleUrl: './property-binding.component.css',
})
export class PropertyBindingComponent {
  imagePath =
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZIK_dzjnmoFopN-Tti8pDSgDA3R8NvHYnAg&s';

  isDisabled = false;

  student = {
    name: 'omkar',
    email: 'omkar@gmail.com',
    city: 'pune',
  };
}
