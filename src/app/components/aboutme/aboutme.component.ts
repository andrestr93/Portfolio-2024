import { Component, Input } from '@angular/core';
import { Profile } from '../../interfaces/profile.interface';

@Component({
  selector: 'section-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrl: './aboutme.component.scss'
})
export class AboutmeComponent {

  @Input() profile!: Profile

}
