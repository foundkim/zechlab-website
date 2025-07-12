import { Component } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { contactData } from './config/contacts';

@Component({
  selector: 'app-contacts',
  imports: [SharedModule],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.css',
})
export class ContactsComponent {
  title = contactData.title;
  subtitle = contactData.subtitle;
  office = contactData.office;
  phone = contactData.phone;
  email = contactData.email;
  labels = contactData.labels;
  placeholders = contactData.placeholders;
  form = contactData.form;

  onSubmit() {
    if (this.form.name && this.form.email && this.form.message) {
      console.log('Message envoyé !', this.form);
      this.form = { name: '', email: '', message: '' };
    }
  }
}
