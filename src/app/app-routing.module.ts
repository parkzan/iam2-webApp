import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SystemPageComponent } from './modules/system/pages/system-page/system-page.component';
import { RolePageComponent } from './modules/role/page/role-page/role-page.component';
import { HomePageComponent } from './modules/home/pages/home-page/home-page.component';

const routes: Routes = [
  {path:'home',component: HomePageComponent},
  {path:'system',component: SystemPageComponent},
  {path:'role/:id',component: RolePageComponent},
  {path:'',component: HomePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
