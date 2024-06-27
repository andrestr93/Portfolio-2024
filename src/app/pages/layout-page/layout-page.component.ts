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
    aboutme: 'Soy una persona responsable y autodidacta, siempre motivada por el deseo de trabajar y emprender nuevos proyectos. Mi pasión por el deporte y la vida sana me impulsa a mantenerme activo y a cuidar mi bienestar, lo cual me ayuda a mantener un equilibrio en todas las áreas de mi vida. Además, estoy en constante aprendizaje, buscando siempre adquirir nuevas habilidades y conocimientos que me permitan crecer tanto personal como profesionalmente. Mi enfoque y determinación me llevan a enfrentar cada desafío con entusiasmo y dedicación.',
    surname: 'Torcuato Rodríguez',
    city: 'Granada',
    img: 'portfolio-2024\docs\assets\laboral.png',
    telephone: 658104590,
    jobs: [
      {
        name_cargo: 'Desarrollador Front',
        name_company: 'Cargoffer', description: 'Desarrollo de nuevas funcionalidades: Capacidad para interpretar y ejecutar los requerimientos específicos del proyecto, garantizando soluciones innovadoras y eficientes que se alinean con los objetivos del negocio. Corrección de bugs: Destreza en la identificación y resolución efectiva de errores, mejorando la estabilidad y la fiabilidad del software. Mejora del código: Compromiso con la calidad del código a través de su optimización y refactorización, asegurando su escalabilidad y mantenibilidad.', experience: 'Mayo-2023 | Mayo - 2024 ', languajes:
          [{ tecnology: 'JavaScript' }, { tecnology: 'Angular' }, { tecnology: 'TypeScript' }, { tecnology: 'Html5' }, { tecnology: 'Scss' }

          ]
      },

      {
        name_cargo: 'Desarrollador Front',
        name_company: 'NttData', description: 'Aplicación de la metodologia Scrum y trabajo mediante Sprints con Jira .Mejora del código: Compromiso con la calidad del código a través de su optimización y refactorización, asegurando su escalabilidad y mantenibilidad.', experience: 'Mayo-2021 | Noviembre-2021', languajes:
          [{ tecnology: 'JavaScript' }, { tecnology: 'SapUI5' }, { tecnology: 'Html5' }, { tecnology: 'Css' }

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
