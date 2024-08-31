import { Component, Input } from '@angular/core';
import { IOurTeam } from '../../../core/models/interface/IOurTeam';

@Component({
  selector: 'app-team-info',
  standalone: true,
  imports: [],
  templateUrl: './team-info.component.html',
  styleUrl: './team-info.component.css',
})
export class TeamInfoComponent {
  @Input() teamMember: IOurTeam = {
    name: '',
    position: '',
    image: '',
    description: '',
  };
}
