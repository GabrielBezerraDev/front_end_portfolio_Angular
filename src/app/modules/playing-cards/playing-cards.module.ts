import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlayingCardsRoutingModule } from './playing-cards-routing.module';
import { PlayingCardsComponent } from './playing-cards.component';
import { CardComponent } from './components/card/card.component';
import { ModalModule } from 'src/app/shared/modules/modal/modal.module';
import { ModalPlayComponent } from './components/modal-play/modal-play.component';
import { DirecivesModule } from 'src/app/shared/directives/directives.module';


@NgModule({
  declarations:
  [
    ModalPlayComponent,
    PlayingCardsComponent,
    CardComponent,
    ModalPlayComponent
  ],
  imports: [
    CommonModule,
    PlayingCardsRoutingModule,
    DirecivesModule
  ]
})
export class PlayingCardsModule { }
