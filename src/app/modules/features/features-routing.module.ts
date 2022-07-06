import { NgModule } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { RouterModule, Routes } from '@angular/router';
import { FeaturesComponent } from './features.component';
import { AngularFireAuthGuard, redirectUnauthorizedTo } from '@angular/fire/compat/auth-guard';
const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);
const routes: Routes = [
  { 
    path: '',
    component: FeaturesComponent, 
    children:[
      {path:'',redirectTo:'product',pathMatch:'full'},
      {path:'features',redirectTo:'product',pathMatch:'full'},
      {
         path: 'product',
         loadChildren: () => import('./product/product.module').then(m => m.ProductModule),
         canActivate:[AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin }
      },
      {path:'**',redirectTo:'login',pathMatch:'full'}

    ]   
 },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule { }
