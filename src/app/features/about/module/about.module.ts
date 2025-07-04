import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PresentationComponent } from '../pages/presentation/presentation.component';
import { TeamComponent } from '../pages/team/team.component';
import { ValuesComponent } from '../pages/values/values.component';
import { ServiceComponent } from '../pages/service/service.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,

    RouterModule.forChild([
      { path: 'presentation', component: PresentationComponent },
      { path: 'team', component: TeamComponent },
      { path: 'values', component: ValuesComponent },
      {path: 'service', component: ServiceComponent},
    ]),
  ],
})
export class AboutModule {}
