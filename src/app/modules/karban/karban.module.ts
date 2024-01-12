import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KarbanRoutingModule } from './karban-routing.module';
import { KarbanComponent } from './karban.component';
import { MainPageKarbanComponent } from './components/main-page-karban/main-page-karban.component';
import { HeaderKarbanComponent } from './components/header-karban/header-karban.component';
import { ConfigurationKarbanComponent } from './components/configuration-karban/configuration-karban.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StagesKarbanComponent } from './components/stages-karban/stages-karban.component';
import { CardKarbanComponent } from './components/card-karban/card-karban.component';
import { ConfigurationCardKarbanComponent } from './components/configuration-card-karban/configuration-card-karban.component';
import { DirecivesModule } from 'src/app/shared/directives/directives.module';


@NgModule({
  declarations: [
    KarbanComponent,
    MainPageKarbanComponent,
    HeaderKarbanComponent,
    ConfigurationKarbanComponent,
    StagesKarbanComponent,
    CardKarbanComponent,
    ConfigurationCardKarbanComponent
  ],
  imports: [
    CommonModule,
    KarbanRoutingModule,
    ReactiveFormsModule,
    DirecivesModule
  ]
})
export class KarbanModule { }
