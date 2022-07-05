import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from '../modules/product/pages/main/main.component';
import { ProductModule } from '../modules/product/product.module';
import { FeaturesComponent } from './features.component';

const routes: Routes = [
  { path: '', component: FeaturesComponent },
  {path:'main',loadChildren:()=>import('./../modules/product/pages/main/main.module').then(m=>m.MainModule)}
]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule { }
