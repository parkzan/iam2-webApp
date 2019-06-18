import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SystemPageComponent } from './pages/system-page/system-page.component';

const routes: Routes = [
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SystemPageRoutingModule { }
