import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observer } from './intersection-observer.directive';
import { HoverElementsDirective } from './hover-elements.directive';
import { ClickedDirective } from './clicked.directive';
import { DragElementsDirective } from './drag-elements.directive';




@NgModule({
  declarations: [
    Observer,
    HoverElementsDirective,
    ClickedDirective,
    DragElementsDirective
   ],
  imports: [
    CommonModule
  ],
  exports:
  [
    HoverElementsDirective,
    Observer,
    ClickedDirective,
    DragElementsDirective
  ]
})
export class DirecivesModule { }
