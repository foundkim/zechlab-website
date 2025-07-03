import { Routes } from '@angular/router';
import { PresentationComponent } from './features/about/pages/presentation/presentation.component';
import { TeamComponent } from './features/about/pages/team/team.component';
import { ValuesComponent } from './features/about/pages/values/values.component';

export const routes: Routes = [
  { path: 'presentation', component: PresentationComponent },
  { path: 'team', component: TeamComponent },
  { path: 'values', component: ValuesComponent },
];
