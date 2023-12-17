import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestRoutingModule } from './test-routing.module';
import { TestComponent } from './test.component';
import { ModalModule } from '../modal/modal.module';
import { InProgressModule } from '../in-progress/in-progress.module';


@NgModule({
  declarations: [
    TestComponent
  ],
  imports: [
    CommonModule,
    TestRoutingModule,
    ModalModule,
    InProgressModule
  ]
})
export class TestModule { }
