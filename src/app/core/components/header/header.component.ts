import { Component, signal } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { NavItem } from '../../models/nav-item';
import { navItems } from '../../config/tabs';

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
}
