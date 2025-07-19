import { Component } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { trainingConfig } from './config/training';

@Component({
  selector: 'app-trainings',
  imports: [SharedModule],
  templateUrl: './trainings.component.html',
  styleUrl: './trainings.component.css',
})
export class TrainingsComponent {
  bannerSubtitle = trainingConfig.bannerSubtitle;
  bannerTitle = trainingConfig.bannerTitle;
  menuTitle = trainingConfig.menuTitle;
  mainHeading = trainingConfig.mainHeading;
  mainParagraph = trainingConfig.mainParagraph;
  menuItems = trainingConfig.menuItems;
  contactUs = trainingConfig.contactUs;
  submitMessage = trainingConfig.submitMessage;
}
