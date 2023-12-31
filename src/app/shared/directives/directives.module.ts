import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observer } from './intersection-observer.directive';
import { HoverElementsDirective } from './hover-elements.directive';
import { ClickedDirective } from './clicked.directive';



@NgModule({
  declarations: [
    Observer,
    HoverElementsDirective,
    ClickedDirective
   ],
  imports: [
    CommonModule
  ],
  exports:
  [
    HoverElementsDirective,
    Observer,
    ClickedDirective
  ]
})
export class DirecivesModule { }
