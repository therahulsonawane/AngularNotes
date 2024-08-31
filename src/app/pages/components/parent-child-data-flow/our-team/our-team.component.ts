import { Component } from '@angular/core';
import { TeamInfoComponent } from '../../../../shared/reusable/team-info/team-info.component';
import { IOurTeam } from '../../../../core/models/interface/IOurTeam';

@Component({
  selector: 'app-our-team',
  standalone: true,
  imports: [TeamInfoComponent],
  templateUrl: './our-team.component.html',
  styleUrl: './our-team.component.css',
})
export class OurTeamComponent {
  teamData: IOurTeam[] = [
    {
      name: 'John Doe',
      position: 'Software Engineer',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsPJ9cm0-r5p50py0yUzvM5ZtEB-xWoJRPRA&s',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut tellus vel ligula efficitur consectetur.',
    },
    {
      name: 'Jane Smith',
      position: 'Product Manager',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGDLno4Hmeqw3f912o4cPVsLlev49aUzHa6g&s',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut tellus vel ligula efficitur consectetur.',
    },
    {
      name: 'Mike Johnson',
      position: 'UI/UX Designer',
      image:
        'https://static.vecteezy.com/system/resources/previews/015/409/989/non_2x/elegant-man-in-business-suit-with-badge-man-business-avatar-profile-picture-illustration-isolated-vector.jpg',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut tellus vel ligula efficitur consectetur.',
    },
    {
      name: 'Lisa Wilson',
      position: 'Team Lead',
      image:
        'https://as1.ftcdn.net/v2/jpg/01/68/80/20/1000_F_168802088_1msBk8PpBRCCVo012WJTpWG90KHvoMWf.jpg',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut tellus vel ligula efficitur consectetur.',
    },
  ];
}
