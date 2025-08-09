import { Component } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { enrollmentData } from '../config/enrollment';

@Component({
  selector: 'app-enrollment',
  imports: [SharedModule],
  templateUrl: './enrollment.component.html',
  styleUrl: './enrollment.component.css'
})
export class EnrollmentComponent {
  enrollment: {
    pageTitle: string;
    pageSubtitle: string;
    jobOffers: { title: string; location: string }[];
    applyNowText: string;
    contactEmail: string;
  } = enrollmentData;
https: any;
}
