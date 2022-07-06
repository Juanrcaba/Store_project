import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';
import { SharedModule } from '../shared/shared.module';
import { SaveComponent } from './save/save.component';
import { SaveModule } from './save/save.module';

import { DeleteComponent } from './delete/delete.component';



@NgModule({
  declarations: [
    ProductComponent,
    SaveComponent,
    DeleteComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    SharedModule,
    SaveModule,
  
    
  ]
})
export class ProductModule { }
