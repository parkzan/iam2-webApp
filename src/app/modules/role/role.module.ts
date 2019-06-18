import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoleRoutingModule } from './role-routing.module';
import { RolePageComponent } from './page/role-page/role-page.component';

@NgModule({
  declarations: [RolePageComponent],
  imports: [
    CommonModule,
    RoleRoutingModule
  ]
})
export class RoleModule { }
