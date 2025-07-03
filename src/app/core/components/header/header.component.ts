import { Component, signal } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { NavItem } from '../../models/nav-item';
import { navItems } from '../../config/tabs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [SharedModule],
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  navItems: NavItem[] = [];

  langs = ['fr', 'en'];

  currentLang = signal('fr');

  navItemsAvailable = navItems;
  constructor(private router: Router) {}

  checkIfRouteIsActive(item: NavItem) {
    if (item.children) {
      return item.children.some((child) =>
        this.router.isActive(item.route + child.route, true),
      );
    }
    return false;
  }
}
