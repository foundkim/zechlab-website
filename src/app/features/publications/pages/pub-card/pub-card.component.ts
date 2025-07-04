import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-pub-card',
  imports: [],
  templateUrl: './pub-card.component.html',
  styleUrl: './pub-card.component.css',
})
export class PubCardComponent {
  @Input() announcement!: {
    image: string;
    category: string;
    title: string;
    description: string;
    link?: string;
    cta: string;
  };
}
