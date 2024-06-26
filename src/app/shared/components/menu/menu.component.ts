import { Component } from '@angular/core';

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {




  scrollToSection(event: Event, sectionId: string) {
    event.preventDefault();  // Previene el salto instantáneo del navegador
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });  // Desplazamiento suave a la sección
    }
  }


}
