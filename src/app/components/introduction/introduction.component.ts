import { Component } from '@angular/core';
import { Profile } from '../../interfaces/profile.interface';
import { Languaje } from '../../interfaces/job.interface';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrl: './introduction.component.scss'
})
export class IntroductionComponent {

  public profile: Profile = {
    introduction: 'Profesional autodidacta y dinámico con 2 años de experiencia en desarrollo de software, especializado en Angular junto con JavaScript | TypeScript. Destacado por el desarrollo e implementación de nuevas funcionalidades, optimización de código y solución eficaz de bugs. Con una marcada habilidad para el aprendizaje rápido y la mejora continua, aporto soluciones innovadoras y de alta calidad que contribuyen aléxito de los proyectos.',
    name: 'Andrés',
    surname: 'Torcuato Rodríguez',
    city: 'Granada',
    img: './../../assets/img/laboral.png',
    telephone: 658104590,
    jobs: [{ name_company: 'Cargoffer', description: '', experience: 0, languaje: Languaje.Angular }]
  }

}
