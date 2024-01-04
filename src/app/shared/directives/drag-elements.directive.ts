import { Directive, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[appDragElements]'
})
export class DragElementsDirective {

  constructor() { }

  @HostListener("drag", ["$event"]) dragElement(event:DragEvent){
    console.log(`Eixo x do elemento: ${event.clientX}`);
    console.log(`Eixo y do elemento: ${event.clientY}`);
  }


}
