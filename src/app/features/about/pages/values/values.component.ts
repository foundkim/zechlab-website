import { Component } from '@angular/core';
import { valuesConfig } from '../../../config/values';
import { SharedModule } from '../../../../shared/shared.module';

@Component({
  selector: 'app-values',
  imports: [SharedModule],
  templateUrl: './values.component.html',
  styleUrl: './values.component.css',
})

export class ValuesComponent {
  sectionTitle = valuesConfig.sectionTitle;
  valueItems = valuesConfig.valueItems;
  text = valuesConfig.text;
}
