import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path:"pokedex",
    loadChildren: () => import("../pokedex/pokedex-home.module").then((m) => m.PokedexHomeModule)
  },
  {
    path:"**",
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
