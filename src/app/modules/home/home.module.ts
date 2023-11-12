import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { PageHomeComponent } from './page-home/page-home.component';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { Observer } from 'src/app/shared/directives/intersection-observer';
import { DirecivesModule } from 'src/app/shared/directives/directives.module';
import { ModalModule } from 'src/app/shared/modules/modal/modal.module';


@NgModule({
  declarations: [
    HomeComponent,
    PageHomeComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    DirecivesModule,
    ModalModule
  ]
})
export class HomeModule { }
