import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ForgotRoutingModule } from './forgot-routing.module';
import { ForgotComponent } from './forgot.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    ForgotComponent
  ],
  imports: [
    CommonModule,
    ForgotRoutingModule,
    SharedModule
  ]
})
export class ForgotModule { }
