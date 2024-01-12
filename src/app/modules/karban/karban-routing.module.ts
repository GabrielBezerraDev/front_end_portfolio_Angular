import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KarbanComponent } from './karban.component';

const routes: Routes =
[
  {
    path:"",
    component: KarbanComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KarbanRoutingModule { }
