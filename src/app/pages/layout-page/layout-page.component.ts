import { Component } from '@angular/core';
import { Profile } from '../../interfaces/profile.interface';


@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styleUrl: './layout-page.component.scss'
})
export class LayoutPageComponent {

  public profile: Profile = {
    subtitule: 'especializado en Angular junto con JavaScript | TypeScript. Destacado por el desarrollo e implementación de nuevas funcionalidades, optimización de código y solución eficaz de bugs. Con una marcada habilidad para el aprendizaje rápido y la mejora continua, aporto soluciones innovadoras y de alta calidad que contribuyen aléxito de los proyectos.',
    introduction: 'Profesional autodidacta y dinámico con 2 años de experiencia en desarrollo de software',
    name: 'Andrés Jesús',
    aboutme: 'Soy una persona responsable y autodidacta, siempre motivada para trabajar y emprender nuevos proyectos.  Además, estoy en constante aprendizaje, buscando siempre adquirir nuevas habilidades y conocimientos que me permitan crecer  profesionalmente. Mi enfoque y determinación me llevan a enfrentar cada desafío con entusiasmo y dedicación.',
    surname: 'Torcuato Rodríguez',
    city: 'Granada',
    img: '/assets/laboral.png',
    telephone: 658104590,
    jobs: [
      {
        name_cargo: 'Desarrollador Front',
        name_company: 'Cargoffer', functions: ['Desarrollo de nuevas funcionalidades: Capacidad para interpretar y ejecutar los requerimientos específicos del proyecto, garantizando soluciones innovadoras y eficientes que se alinean con los objetivos del negocio. ', 'Corrección de bugs: Destreza en la identificación y resolución efectiva de errores, mejorando la estabilidad y la fiabilidad del software.', 'Mejora del código: Compromiso con la calidad del código a través de su optimización y refactorización, asegurando su escalabilidad y mantenibilidad.'], experience: 'Mayo-2023 | Mayo - 2024 ', technology:
          [{ tecnology: 'JavaScript', icon: '/assets/icons/icon-javascript.png' },
          { tecnology: 'Angular', icon: '/assets/icons/icon-angular.png' },
          { tecnology: 'TypeScript', icon: '/assets/icons/icon-typescript.png' },
          { tecnology: 'Html5', icon: '/assets/icons/icon-html5.png' },
          { tecnology: 'Scss', icon: '/assets/icons/icon-scss.png' }

          ]
      },

      {
        name_cargo: 'Desarrollador Front',
        name_company: 'NttData', functions: ['Aplicación de la metodologia Scrum y trabajo mediante Sprints con Jira .', 'Mejora del código: Compromiso con la calidad del código a través de su optimización y refactorización, asegurando su escalabilidad y mantenibilidad.'], experience: 'Mayo-2021 | Noviembre-2021', technology:
          [{ tecnology: 'JavaScript', icon: '/assets/icons/icon-javascript.png' }, { tecnology: 'SapUI5', icon: '/assets/icons/icon-sap.png' }, { tecnology: 'Html5', icon: '/assets/icons/icon-html5.png' }, { tecnology: 'Css', icon: '/assets/icons/icon-scss.png' }

          ]
      }



    ],

    training: [
      {
        training: 'CFGS Desarrollo de Aplicaciones Multiplataforma',
        institution: 'I.E.S Francisco Ayala', duration: 'Septiembre - 2018 | Mayo - 2020'
      },

      {
        training: 'Curso de Angular 2024',
        institution: 'Dev Talles | Fernando Herrera', duration: '2 Semanas'
      }






    ]


  }
}
