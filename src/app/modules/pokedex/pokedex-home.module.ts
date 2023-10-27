import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokedexHomeRoutingModule } from './pokedex-home-routing.module';
import { PokedexHomeComponent } from './pokedex-home.component';
import { HeaderPokedexComponent } from './header-pokedex/header-pokedex.component';
import { FilterPokemonComponent } from './components/filter-pokemon/filter-pokemon.component';


@NgModule({
  declarations: [
    PokedexHomeComponent,
    HeaderPokedexComponent
  ],
  imports: [
    CommonModule,
    PokedexHomeRoutingModule,
  ]
})
export class PokedexHomeModule { }
