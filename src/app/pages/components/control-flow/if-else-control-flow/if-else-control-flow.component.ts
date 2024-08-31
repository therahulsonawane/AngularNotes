import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-if-else-control-flow',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './if-else-control-flow.component.html',
  styleUrl: './if-else-control-flow.component.css',
})
export class IfElseControlFlowComponent {
  age = 30;
}
