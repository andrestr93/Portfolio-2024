import { Component, Input } from '@angular/core';
import { Profile } from '../../interfaces/profile.interface';

@Component({
  selector: 'section-experience',
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {

  @Input() profile?: Profile


}
