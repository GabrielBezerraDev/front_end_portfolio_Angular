import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokedexHomeRoutingModule } from './pokedex-home-routing.module';
import { PokedexHomeComponent } from './pokedex-home.component';
import { ModalModule } from 'src/app/shared/utils/modules/modal/modal.module';
import { HeaderPokedexComponent } from './header-pokedex/header-pokedex.component';


@NgModule({
  declarations: [
    PokedexHomeComponent,
    HeaderPokedexComponent
  ],
  imports: [
    CommonModule,
    PokedexHomeRoutingModule,
    ModalModule
  ]
})
export class PokedexHomeModule { }
