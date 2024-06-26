import { Component, Input } from '@angular/core';
import { Profile } from '../../interfaces/profile.interface';

@Component({
  selector: 'section-training',
  templateUrl: './training.component.html',
  styleUrl: './training.component.scss'
})
export class TrainingComponent {

  @Input() profile!: Profile

}
