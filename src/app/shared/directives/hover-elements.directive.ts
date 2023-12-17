import { Directive, Output, HostListener, EventEmitter } from '@angular/core';

@Directive({
  selector: '[hover]'
})

export class HoverElementsDirective{
  @Output() onHoverElement: EventEmitter<string> = new EventEmitter<string>();
  private classElement: string;

  constructor(
  ) { }

  @HostListener('mouseover', ['$event.target']) returnClass(element:HTMLElement){
    this.classElement = (Array(element.classList)[0])[(Array(element.classList)[0]).length-1];
    this.onHoverElement.emit(this.classElement);
  }

  private hoverElement():void{

  }

}
