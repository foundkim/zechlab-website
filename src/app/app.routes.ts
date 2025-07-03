import { Routes } from '@angular/router';
import { HomeComponent } from './features/welcome/pages/home/home.component';
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
];
