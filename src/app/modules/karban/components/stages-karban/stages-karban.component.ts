import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-stages-karban',
  templateUrl: './stages-karban.component.html',
  styleUrls: ['./stages-karban.component.scss']
})
export class StagesKarbanComponent {

  @Input() karbanStages: Array<string>;


}
