import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-main-page-karban',
  templateUrl: './main-page-karban.component.html',
  styleUrls: ['./main-page-karban.component.scss']
})
export class MainPageKarbanComponent {

public karbanStages: Array<string> = [];

public setKarbanStages(stages: Array<string>):void{
  this.karbanStages = stages;
}

}
