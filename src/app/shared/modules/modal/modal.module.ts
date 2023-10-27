import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';



@NgModule({
  declarations: [
    ModalComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule
  ],
  exports:[
    ModalComponent
  ]
})
export class ModalModule { }
