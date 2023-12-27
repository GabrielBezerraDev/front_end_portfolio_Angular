import { Directive, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[clicked]'
})
export class ClickedDirective {
  @Output() onClicked: EventEmitter<HTMLElement> = new EventEmitter<HTMLElement>();
  constructor() { }

  @HostListener("click", ["$event.target"]) clicked(element:HTMLElement){
    this.onClicked.emit(element);
  }

}
