import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-scren-main',
  templateUrl: './scren-main.component.html',
  styleUrls: ['./scren-main.component.scss']
})
export class ScrenMainComponent {

  public elementX: number = 0;
  public elementY: number = 0;

  @Input() cardsToPlay: Array<string> = [];
  @Input() deckOne: Array<string> = [];
  @Input() deckTwo: Array<string> = [];
  @Input() deckOneIndex: number = 0;
  @Input() deckTwoIndex: number = 0;

  public setElementX(elementX:number):void{
    this.elementX = elementX;
  }

  public setElementY(elementY:number):void{
    this.elementY = elementY;
  }

}
