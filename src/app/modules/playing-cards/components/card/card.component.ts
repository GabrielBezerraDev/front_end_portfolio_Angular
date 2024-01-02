import { Component, OnInit } from '@angular/core';
import { isEmpty } from 'rxjs';

type ObjectNaipe = {[k:number]:Array<string>};

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit{

  private pathCards: string = "/assets/imgs/BaralhoAssets/CuteCards";
  private extesionCards: string = ".png";
  private typesCards: Array<string> = ["Club","Gold","Heart","Sword"];
  private cardsValues: Array<string> = ["A","1","2","3","4","5","6","7","8","9","10","Q","K","J"];
  private typeChoiced: number = 0;
  private cardValuePicked: string = "";
  private cardsToPlay: Array<string> = [];
  private test:number = 0;
  private isEmpty: boolean = false;
  private naipes: ObjectNaipe =
  {
    0:[...this.cardsValues],
    1:[...this.cardsValues],
    2:[...this.cardsValues],
    3:[...this.cardsValues]
  }

  ngOnInit(): void {
      // console.log(this.naipes);
      for(let i: number = 0; i < 56; i++){
        this.isEmpty = false;
        this.randomPick(this.typesCards, this.typeChoiced);
        if(this.isEmpty) continue;
        this.randomPick(this.cardsValues, this.cardValuePicked, true);
        this.test = i;
      }
  }

  private randomPick<T>(arrayElements: Array<T>, getElement: string | number, removeElement?:boolean):void{
    let indexElement = Math.floor(Math.random()*arrayElements.length);
    if(typeof getElement === "number"){
      this.typeChoiced = indexElement;
      this.pathCards = `${this.pathCards}${arrayElements[this.typeChoiced]}_`
      console.log(this.naipes);
      // console.log(this.naipes[this.typeChoiced]);
      if(this.naipes[this.typeChoiced].length <= 0){
        this.isEmpty = true;
        let index: number = arrayElements.indexOf(arrayElements[this.typeChoiced]);
        arrayElements.splice(index, 1);
        console.log(arrayElements);
      }
    } else{
      this.cardValuePicked = arrayElements[indexElement] as string;
      let removeElement = this.naipes[this.typeChoiced].indexOf(this.cardValuePicked);
      this.pathCards = `${this.pathCards}${this.naipes[this.typeChoiced].splice(removeElement, 1)}`
      this.cardsToPlay.push(this.pathCards);
      this.pathCards = "/assets/imgs/BaralhoAssets/CuteCards";
      if(this.test === 54) console.log(this.cardsToPlay);
    }
  }

  private removeElement<T>(arrayElements:Array<T>, element:T):void{
    let index: number = arrayElements.indexOf(element);
    arrayElements.splice(index, 1);
  }

}
