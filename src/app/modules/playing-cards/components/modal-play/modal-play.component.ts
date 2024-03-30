import { Component, ElementRef, Renderer2 } from '@angular/core';
import { PlayingCardService } from '../../../../services/playing-card.service';

@Component({
  selector: 'app-modal-play',
  templateUrl: './modal-play.component.html',
  styleUrls: ['./modal-play.component.scss']
})
export class ModalPlayComponent {

  constructor(private elementRef: ElementRef, private renderer: Renderer2, private playingCardService:PlayingCardService){}

  public setUsername():void{
    let inputUser: HTMLInputElement = this.elementRef.nativeElement.querySelector("input");
    this.renderer.setStyle(this.elementRef.nativeElement.querySelector(".modal-user"),"display","none");
    this.playingCardService.get().subscribe(
      {
        next: (value) => console.log(value)
      }
    );
  }


}
