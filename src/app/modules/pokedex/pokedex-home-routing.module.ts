import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokedexHomeComponent } from './pokedex-home.component';
import { TrainerPokemonComponent } from './trainer-pokemon/trainer-pokemon.component';

const routes: Routes =
[
  {
    path: "",
    pathMatch:"prefix",
    redirectTo:"booth"
  },
  {
    path:"booth",
    loadChildren: () => import("./pokedex-page/pokedex-page.module").then(m => m.PokedexPageModule)
  },
  {
    path: "perfil",
    component: TrainerPokemonComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokedexHomeRoutingModule { }
