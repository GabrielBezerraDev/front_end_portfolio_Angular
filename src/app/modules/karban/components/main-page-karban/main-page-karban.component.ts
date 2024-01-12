import { Component, Input, ViewChild } from '@angular/core';
import { StagesKarbanComponent } from '../stages-karban/stages-karban.component';
import { ICardStage } from '../../interfaces/ICardStage';
import { ConfigurationCardKarbanComponent } from '../configuration-card-karban/configuration-card-karban.component';
import { ConfigurationKarbanComponent } from '../configuration-karban/configuration-karban.component';

@Component({
  selector: 'app-main-page-karban',
  templateUrl: './main-page-karban.component.html',
  styleUrls: ['./main-page-karban.component.scss']
})
export class MainPageKarbanComponent {

  @ViewChild(StagesKarbanComponent) stages: StagesKarbanComponent;
  @ViewChild(ConfigurationKarbanComponent) configuration: ConfigurationKarbanComponent;

public karbanStages: Array<string> = [];

public setKarbanStages(stages: Array<string>):void{
  this.karbanStages = stages;
  this.stages.setStagesKarban(this.karbanStages);
}

public setCard(card: ICardStage):void{
  this.stages.setCardValue(card);
}

public activedOptionsCard(value:boolean):void{
  this.configuration.optionsCard = value;
}

}
