import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDragElement]'
})
export class DragElementDirective {
  public currentElement: HTMLElement;
  public position1: number;
  public position2: number;
  public position3: number;
  public position4: number;


  constructor(
    private elementRef: ElementRef
  ) { }

  @HostListener("mousedown", ["$event"]) teste(event:MouseEvent):void{
    this.currentElement = event.target as HTMLElement;
    while(!this.currentElement.classList.contains("card-karban")){
      this.currentElement = this.currentElement.parentElement as HTMLElement;
    }
    if(this.currentElement.classList.contains("card-karban")){
      console.dir(event.target);
      console.log(this.currentElement);
      this.position3 = event.clientX;
      this.position4 = event.clientY;
      this.currentElement.onmousemove = this.test2;
      this.currentElement.onmouseup = this.removeEvents;
    }
  }

  public test2(event:MouseEvent):void{
    let element = event.target as HTMLElement;
    console.log(element);
    this.position1 = this.position3 - event.clientX;
    this.position2 = this.position4 - event.clientY;
    this.position3 = event.clientX;
    this.position4 = event.clientY;
    element.style.position = "absolute";
    element.style.top = `${element.offsetTop - this.position2}px`;
    element.style.left = `${element.offsetLeft - this.position1}px`;
  }

  public removeEvents(event: MouseEvent):void{
   let element = event.target as HTMLElement;
   element.onmousemove = null;
   element.onmouseup = null;
  }

  // @HostListener("mousemove", ["$event"]) teste2(event:MouseEvent):void{
  //   this.position1 = this.position3 - event.clientX;
  //   this.position2 = this.position4 - event.clientY;
  //   this.position3 = event.clientX;
  //   this.position4 = event.clientY;
  //   this.currentElement.style.position = "absolute";
  //   this.currentElement.style.top = `${this.currentElement.offsetTop - this.position2}px`;
  //   this.currentElement.style.left = `${this.currentElement.offsetLeft - this.position1}px`;

  // }

}
