import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { PageHomeComponent } from './page-home/page-home.component';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { DirecivesModule } from 'src/app/shared/directives/directives.module';
import { ModalModule } from 'src/app/shared/modules/modal/modal.module';
import { AsideMenuComponent } from './page-home/components/aside-menu/aside-menu.component';
import { HoverTextComponent } from './page-home/components/hover-text/hover-text.component';
import { OptionsCompetenceComponent } from './page-home/components/options-competence/options-competence.component';
import { EOptionsMenu } from './Enum/Eoptions-menu';
import { ECompetencia } from './Enum/Ecompetencia';
import { FadeInModule } from 'src/app/shared/modules/fade-in/fade-in.module';
import { ScreenUtils } from 'src/app/shared/utils/screen-utils';


@NgModule({
  declarations: [
    HomeComponent,
    PageHomeComponent,
    HeaderComponent,
    AsideMenuComponent,
    HoverTextComponent,
    OptionsCompetenceComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    DirecivesModule,
    ModalModule,
    FadeInModule
  ],
  providers:
  [
    EOptionsMenu,
    ECompetencia,
    ScreenUtils
  ]
})
export class HomeModule { }
