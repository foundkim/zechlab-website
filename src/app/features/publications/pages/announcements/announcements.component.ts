import { Component } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';
import { PubCardComponent } from '../pub-card/pub-card.component';
import { announcements } from '../../../config/announcements';


@Component({
  selector: 'app-announcements',
  imports: [SharedModule, PubCardComponent],
  templateUrl: './announcements.component.html',
  styleUrls: ['./announcements.component.css'],
})
export class AnnouncementsComponent {
  announcements: typeof announcements = announcements;
}
