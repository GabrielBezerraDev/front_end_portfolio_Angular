import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameBarComponent } from './game-bar.component';

const routes: Routes = [
  {
    path:"",
    component: GameBarComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GameBarRoutingModule { }
