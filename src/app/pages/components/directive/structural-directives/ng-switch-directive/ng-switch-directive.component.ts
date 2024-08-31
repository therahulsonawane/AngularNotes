import { NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ng-switch-directive',
  standalone: true,
  imports: [NgSwitch, NgSwitchCase, NgSwitchDefault, FormsModule],
  templateUrl: './ng-switch-directive.component.html',
  styleUrl: './ng-switch-directive.component.css',
})
export class NgSwitchDirectiveComponent {
  color = 'red';
}
