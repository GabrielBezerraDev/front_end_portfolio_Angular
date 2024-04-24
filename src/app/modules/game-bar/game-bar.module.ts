import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameBarRoutingModule } from './game-bar-routing.module';
import { GameBarComponent } from './game-bar.component';


@NgModule({
  declarations: [
    GameBarComponent
  ],
  imports: [
    CommonModule,
    GameBarRoutingModule
  ]
})
export class GameBarModule { }
