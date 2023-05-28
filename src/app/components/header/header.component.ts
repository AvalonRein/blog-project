import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  items: MenuItem[] = [
    {
      label: 'Home',
      icon: 'pi pi-home',
      routerLink: '/'
    },
    {
      label: 'Home',
      icon: 'pi pi-pencil',
      routerLink: '/blog'
    },
    {
      label: 'About',
      icon: 'pi pi-info',
      routerLink: '/about'
    },
    {
      label: 'Search',
      icon: 'pi pi-search',
      routerLink: '/search'
    }
  ]
}
