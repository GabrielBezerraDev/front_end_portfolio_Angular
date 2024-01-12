import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observer } from './intersection-observer.directive';
import { HoverElementsDirective } from './hover-elements.directive';
import { ClickedDirective } from './clicked.directive';
import { DragElementDirective } from './drag-element.directive';



@NgModule({
  declarations: [
    Observer,
    HoverElementsDirective,
    ClickedDirective,
    DragElementDirective
   ],
  imports: [
    CommonModule
  ],
  exports:
  [
    HoverElementsDirective,
    Observer,
    ClickedDirective,
    DragElementDirective
  ]
})
export class DirecivesModule { }
