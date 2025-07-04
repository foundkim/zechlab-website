import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MediaComponent } from '../pages/media/media.component';
import { PodcastsComponent } from '../pages/podcasts/podcasts.component';
import { ArticlesComponent } from '../pages/articles/articles.component';
import { AnnouncementsComponent } from '../pages/announcements/announcements.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,

    RouterModule.forChild([
      { path: 'announcements', component: AnnouncementsComponent },
      { path: 'articles', component: ArticlesComponent },
      { path: 'podcasts', component: PodcastsComponent },
      { path: 'media', component: MediaComponent },
    ]),
  ],
})
export class PublicationsModule {}
