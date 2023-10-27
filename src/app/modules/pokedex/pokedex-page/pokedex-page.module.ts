import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokedexPageRoutingModule } from './pokedex-page-routing.module';
import { PokedexPageComponent } from './pokedex-page.component';
import { AngularMaterialModule } from 'src/app/shared/modules/angular-material/angular-material.module';
import { PokemonsTypes } from '../enum/enum-typesPokemon';
import { FilterPokemonComponent } from '../components/filter-pokemon/filter-pokemon.component';


@NgModule({
  declarations:
  [
    PokedexPageComponent,
    FilterPokemonComponent
  ],
  imports:
  [
    CommonModule,
    PokedexPageRoutingModule,
    AngularMaterialModule
  ],
  providers:
  [
    PokemonsTypes
  ]
})
export class PokedexPageModule { }
