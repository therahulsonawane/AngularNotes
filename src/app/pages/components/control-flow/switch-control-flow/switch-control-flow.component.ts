import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-switch-control-flow',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './switch-control-flow.component.html',
  styleUrl: './switch-control-flow.component.css',
})
export class SwitchControlFlowComponent {
  color = 'red';
}
