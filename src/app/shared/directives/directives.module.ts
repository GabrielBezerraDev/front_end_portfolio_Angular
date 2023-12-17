import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observer } from './intersection-observer.directive';
import { HoverElementsDirective } from './hover-elements.directive';



@NgModule({
  declarations: [
    Observer,
    HoverElementsDirective
  ],
  imports: [
    CommonModule
  ],
  exports:
  [
    HoverElementsDirective,
    Observer
  ]
})
export class DirecivesModule { }
