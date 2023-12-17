import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { InProgressModule } from '../in-progress/in-progress.module';



@NgModule({
  declarations: [
    ModalComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    InProgressModule
  ],
  exports:[
    ModalComponent
  ]
})
export class ModalModule { }
