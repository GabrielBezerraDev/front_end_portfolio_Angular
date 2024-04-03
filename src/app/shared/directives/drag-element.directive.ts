import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDragElement]'
})

export class DragElementDirective {



  constructor(
    private elementRef: ElementRef
  ) { }

  @HostListener("mousedown", ["$event"]) teste(event:MouseEvent):void{
    event.preventDefault();
    let currentElement: HTMLElement;
    let position1: number = 0;
    let position2: number = 0;
    let position3: number = 0;
    let position4: number = 0;
    currentElement = event.target as HTMLElement;
    while(!currentElement.classList.contains("move")){
      currentElement = currentElement.parentElement as HTMLElement;
    }

      position3 = event.clientX;
      position4 = event.clientY;
      document.onmousemove = test2;
      document.onmouseup = removeEvents;

    function test2(event:MouseEvent):void{

      position1 = position3 - event.clientX;
      position2 = position4 - event.clientY;
      position3 = event.clientX;
      position4 = event.clientY;
      currentElement.style.top = `${currentElement.offsetTop - position2}px`;
      currentElement.style.left = `${currentElement.offsetLeft - position1}px`;

    }

    function removeEvents(event: MouseEvent):void{
     document.onmousemove = null;
     document.onmouseup = null;
    }
  }

}

