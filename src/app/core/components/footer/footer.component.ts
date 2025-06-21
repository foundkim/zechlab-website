import { Component } from '@angular/core';
import { navItems } from '../../config/tabs';
import { SharedModule } from '../../../shared/shared.module';
import { contactLinks, socialLinks } from '../../config/contact';

@Component({
  selector: 'app-footer',
  imports: [SharedModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  aboutChildrenLink = navItems[0].children;
  contactLinks = contactLinks;
  socialLinks = socialLinks;
}
