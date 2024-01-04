import { Component, OnInit } from '@angular/core';

type ObjectNaipe = {[k:string]:Array<string>};
@Component({
  selector: 'app-playing-cards',
  templateUrl: './playing-cards.component.html',
  styleUrls: ['./playing-cards.component.scss']
})
export class PlayingCardsComponent implements OnInit {

  public cardsToPlay: Array<string> = [];
  public deckOne: Array<string> = [];
  public deckTwo: Array<string> = [];
  public deckOneIndex: number = 0;
  public deckTwoIndex: number = 0;


  private pathCards: string = "/assets/imgs/BaralhoAssets/CuteCards";
  private typesCards: Array<string> = ["Club","Gold","Heart","Sword"];
  private cardsValues: Array<string> = ["A","2","3","4","5","6","7","8","9","10","Q","K","J"];
  private typeChoiced: number = 0;
  private cardValuePicked: string = "";
  private naipes: ObjectNaipe =
  {
    Sword:[...this.cardsValues],
    Gold:[...this.cardsValues],
    Heart:[...this.cardsValues],
    Club:[...this.cardsValues]
  }

  ngOnInit(): void {
      // console.log(this.naipes);
      for(let i: number = 0; i < 52; i++){
        this.randomPick(this.typesCards, this.typeChoiced);
        // console.log(this.cardsToPlay);
        // console.log(this.naipes);
        this.randomPick(this.cardsValues, this.cardValuePicked, true);
      }
      // this.onDeckCards.emit(this.cardsToPlay);
      // console.log(this.cardsToPlay);
      this.splitDeck();
  }

  private randomPick<T>(arrayElements: Array<T>, getElement: string | number, removeElement?:boolean):void{
    let indexElement = Math.floor(Math.random()*arrayElements.length);
    if(typeof getElement === "number"){
      this.typeChoiced = indexElement;
      this.pathCards = `${this.pathCards}${arrayElements[this.typeChoiced]}_`
      // console.log(this.typesCards);
      // console.log(this.typeChoiced);
      if(this.naipes[arrayElements[this.typeChoiced] as string].length <= 0){
        this.pathCards = "/assets/imgs/BaralhoAssets/CuteCards";
        // let index: number = arrayElements.indexOf(arrayElements[this.typeChoiced]);
        arrayElements.splice(this.typeChoiced, 1);
        this.randomPick(arrayElements,getElement);
      }
    } else{
      this.cardValuePicked = arrayElements[indexElement] as string;
      let removeElement = this.naipes[this.typesCards[this.typeChoiced]].indexOf(this.cardValuePicked);
      this.pathCards = `${this.pathCards}${this.naipes[this.typesCards[this.typeChoiced]].splice(removeElement, 1)}.png`
      this.cardsToPlay.push(this.pathCards);
      this.pathCards = "/assets/imgs/BaralhoAssets/CuteCards";
      // if(this.test === 54) console.log(this.cardsToPlay);
    }
  }

  private removeElement<T>(arrayElements:Array<T>, element:T):void{
    let index: number = arrayElements.indexOf(element);
    arrayElements.splice(index, 1);
  }

  private splitDeck():void{
    let spliteIndex = this.cardsToPlay.length / 2;
    this.deckOne = this.cardsToPlay.slice(0,spliteIndex);
    this.deckTwo = this.cardsToPlay.slice(spliteIndex,spliteIndex*2)
    console.log(this.deckOne);
    console.log(this.deckTwo);
  }

}
