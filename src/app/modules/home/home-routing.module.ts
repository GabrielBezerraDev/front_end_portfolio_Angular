import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { ModalComponent } from 'src/app/shared/modules/modal/modal.component';
import { GamesComponent } from './games/games.component';

const routes: Routes = [
  {
    path:"pokedex",
    loadChildren: () => import("../pokedex/pokedex-home.module").then((m) => m.PokedexHomeModule)
  },
  {
  path:"test",
  loadChildren: () => import("../../shared/modules/test/test.module").then( m => m.TestModule)
  },
  {
    path: "playing-cards",
    loadChildren: () => import("../playing-cards/playing-cards.module").then( m => m.PlayingCardsModule)
  },
  {
    path:"",
    component: HomeComponent
  },
  {
    path:"games",
    component: GamesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
