import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeaturesComponent } from './features/features.component';
import { LoginComponent } from './modules/auth/pages/login/login.component';

const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
 { path: 'features', loadChildren:()=>import('./features/features.module').then(m=>m.FeaturesModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
