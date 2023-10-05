import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokedexHomeComponent } from './pokedex-home.component';

const routes: Routes =
[
  {
    path: "",
    component:PokedexHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokedexHomeRoutingModule { }
