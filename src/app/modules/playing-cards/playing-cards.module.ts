import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlayingCardsRoutingModule } from './playing-cards-routing.module';
import { PlayingCardsComponent } from './playing-cards.component';
import { ScrenMainComponent } from './components/scren-main/scren-main.component';
import { DirecivesModule } from 'src/app/shared/directives/directives.module';


@NgModule({
  declarations:
  [
    PlayingCardsComponent,
    ScrenMainComponent
  ],
  imports: [
    CommonModule,
    PlayingCardsRoutingModule,
    DirecivesModule
  ]
})
export class PlayingCardsModule { }
