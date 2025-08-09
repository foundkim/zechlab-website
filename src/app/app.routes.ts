import { Routes } from '@angular/router';
import { HomeComponent } from './features/welcome/pages/home/home.component';
import { ContactsComponent } from './features/contacts/contacts.component';
import { TrainingsComponent } from './features/trainings/trainings.component';
import { EnrollmentComponent } from './features/enrollment/enrollment.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'about',
    loadChildren: () =>
      import('./features/about/module/about.module').then((m) => m.AboutModule),
  },
  {
    path: 'publications',
    loadChildren: () =>
      import('./features/publications/module/publications.module').then(
        (m) => m.PublicationsModule,
      ),
  },
  {
    path: 'contacts',
    component: ContactsComponent,
  },
  {
    path: 'training',
    component: TrainingsComponent,
  },
  {
    path: 'recruitment',
    component: EnrollmentComponent,
  },
];
