import { Component } from '@angular/core';

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {

  public sidebarItems = [
    { label: 'Listado', icon: 'label', url: '' },

    { label: 'Añadir', icon: 'add', url: '' },

    { label: 'Buscar', icon: 'search', url: '' }

  ]

}
