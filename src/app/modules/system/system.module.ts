import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SystemPageRoutingModule } from './system-routing.module';
import { SystemPageComponent } from './pages/system-page/system-page.component';

@NgModule({
  declarations: [SystemPageComponent],
  imports: [
    CommonModule,
    SystemPageRoutingModule
  ]
})
export class SystemPageModule { }
