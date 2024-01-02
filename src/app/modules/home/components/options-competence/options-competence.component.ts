import { Component, Input, ViewChild } from '@angular/core';
import { IOptionsMenu } from '../../interfaces/Ioptions-menu';

@Component({
  selector: 'app-options-competence',
  templateUrl: './options-competence.component.html',
  styleUrls: ['./options-competence.component.scss']
})
export class OptionsCompetenceComponent {
  @Input() currentOptions: Array<IOptionsMenu> = [];


}
