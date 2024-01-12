import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-karban',
  templateUrl: './card-karban.component.html',
  styleUrls: ['./card-karban.component.scss']
})
export class CardKarbanComponent {

@Input() currentStage: string;
@Input() tittleCard: string;
@Input() descriptionCard: string;

}
