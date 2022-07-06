import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  {path:'',redirectTo:'features',pathMatch:'full'}  ,
  //{path:'features', loadChildren:()=>import('./modules/features/features.module').then(m=>m.FeaturesModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
