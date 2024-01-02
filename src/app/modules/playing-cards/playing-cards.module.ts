import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlayingCardsRoutingModule } from './playing-cards-routing.module';
import { PlayingCardsComponent } from './playing-cards.component';
import { CardComponent } from './components/card/card.component';


@NgModule({
  declarations:
  [
    PlayingCardsComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    PlayingCardsRoutingModule
  ]
})
export class PlayingCardsModule { }
