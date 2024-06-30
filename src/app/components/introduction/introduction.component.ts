import { Component, Input, OnInit } from '@angular/core';
import { Profile } from '../../interfaces/profile.interface';


@Component({
  selector: 'section-introduction',
  templateUrl: './introduction.component.html',
  styleUrl: './introduction.component.scss'
})
export class IntroductionComponent {

  @Input() profile!: Profile

  openLetter() {
    const url = '/assets/recomendacion.pdf'; // Ruta al archivo PDF en la carpeta assets
    window.open(url, '_blank');
  }
}
