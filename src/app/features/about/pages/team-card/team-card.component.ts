import { Component, Input } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';

@Component({
  selector: 'app-team-card',
  imports: [SharedModule],
  templateUrl: './team-card.component.html',
  styleUrl: './team-card.component.css',
})
export class TeamCardComponent {
  @Input() title!: string;
  @Input() addressLines!: string[];
  @Input() phone!: string;
  @Input() photo!: string;
  @Input() actions!: { icon: string; label: string; link: string }[];
}
