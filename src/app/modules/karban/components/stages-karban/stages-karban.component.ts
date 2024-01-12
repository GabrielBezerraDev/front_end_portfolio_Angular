import { ICardStage } from '../../interfaces/ICardStage';
import { IStage } from './../../interfaces/IStages';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-stages-karban',
  templateUrl: './stages-karban.component.html',
  styleUrls: ['./stages-karban.component.scss']
})
export class StagesKarbanComponent {
  @Output() onActivedOptionsCard: EventEmitter<boolean> = new EventEmitter<boolean>();

  public board: IStage = {};
  public currentStage: string;
  public karbanStages: Array<string>;
  public valuesBoard: Array<Array<ICardStage>>;

  public setStagesKarban(karbanStages: Array<string>):void{
    this.karbanStages = karbanStages;
    console.log(karbanStages);
    console.log(this.karbanStages);
    this.setObjectBoard();
    console.log(this.board);
    // for(let i:number = 0; i < 9; i++) {
    //   this.board[this.karbanStages[0]].push("CU do krl");
    // }
    this.setValuesBoard();
    console.log(this.valuesBoard);
  }

  public setValuesBoard():void{
    this.valuesBoard = Object.values(this.board);
  }

  public setObjectBoard():void{
    for(let i:number = 0; i < this.karbanStages.length; i++){
      console.log("teste");
      this.board[this.karbanStages[i] as keyof IStage] = [];
    }
  }

  public setCardValue(card:ICardStage):void{
    console.log(this.board[this.currentStage as keyof IStage]);
    card.stageCard = this.currentStage;
    this.board[this.currentStage as keyof IStage].push(card);
  }

  public addCard(stage:string):void{
    this.currentStage = stage;
    this.activedOptionsCard();
    console.log(stage);
  }

  public activedOptionsCard():void{
    this.onActivedOptionsCard.emit(true);
  }
}
