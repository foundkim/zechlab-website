import { Component, Input } from '@angular/core';
import { serviceConfig } from '../../../config/services';
import { SharedModule } from '../../../../shared/shared.module';

@Component({
  selector: 'app-service',
  imports: [SharedModule],
  templateUrl: './service.component.html',
  styleUrl: './service.component.css',
})
export class ServiceComponent {
  bannerTitle = serviceConfig.bannerTitle;
  bannerSubtitle = serviceConfig.bannerSubtitle;
  services = serviceConfig.services


  @Input() service!: {
    image: string;
    title: string;
    description: string;
    link?: string;
    cta: string;
  };
}
