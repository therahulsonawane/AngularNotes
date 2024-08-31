import { Component } from '@angular/core';
import { CubePipe } from '../../../../shared/pipes/cube.pipe';
import { PowerPipe } from '../../../../shared/pipes/power.pipe';

@Component({
  selector: 'app-custom-pipes',
  standalone: true,
  imports: [CubePipe,PowerPipe],
  templateUrl: './custom-pipes.component.html',
  styleUrl: './custom-pipes.component.css'
})
export class CustomPipesComponent {

}
