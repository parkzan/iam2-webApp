import { RolePageComponent } from './modules/role/page/role-page/role-page.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { MenuComponent } from './core/menu/menu.component';
import { SystemPageComponent } from './modules/system/pages/system-page/system-page.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SystemSystemService } from './core/services/system-service.service';
import { SystemAddReq } from './shared/models/request/system/system-add-req';
import { SystemEditReq } from './shared/models/request/system/system-edit-req';
import { SystemDeleteReq } from './shared/models/request/system/system-delete-req';
import { HttpClientModule } from '@angular/common/http';
import { RoleServiceService } from './core/services/role-service.service';
import { RoleView } from './shared/models/request/role/role-view';
import { RoleAdd } from './shared/models/request/role/role-add';
import { RoleEdit } from './shared/models/request/role/role-edit';
import { HomePageComponent } from './modules/home/pages/home-page/home-page.component';
import { LoadingComponent } from './shared/loading/loading.component';
import { NgxUiLoaderModule } from  'ngx-ui-loader';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    SystemPageComponent,
    RolePageComponent,
    HomePageComponent,
    LoadingComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxUiLoaderModule
  ],
  providers: [
    SystemSystemService,
    SystemAddReq,
    SystemEditReq,
    SystemDeleteReq,
    RoleServiceService,
    RoleView,
    RoleAdd,
    RoleEdit
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
