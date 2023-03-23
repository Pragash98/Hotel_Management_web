import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminloginComponent } from './adminlogin/adminlogin.component';
import {AdminregisterComponent} from './adminregister/adminregister.component';
import { PagesRoutingModule } from './pages-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { Page404Component } from './page404/page404.component';
import { Page500Component } from './page500/page500.component';
import { ButtonModule, CardModule, FormModule, GridModule } from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular';
import { ReactiveFormsModule } from '@angular/forms';

import {
  ButtonGroupModule,
  CollapseModule,
  DropdownModule,
  NavbarModule,
  NavModule,
  SharedModule,
  UtilitiesModule
} from '@coreui/angular'
import { DocsComponentsModule } from '@docs-components/docs-components.module';
import { StaffloginComponent } from './stafflogin/stafflogin.component';


@NgModule({
  declarations: [
    AdminloginComponent,
    AdminregisterComponent,
    LoginComponent,
    RegisterComponent,
    Page404Component,
    Page500Component,
    StaffloginComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    ButtonGroupModule,
    GridModule,
    IconModule,
    CardModule,
    UtilitiesModule,
    DropdownModule,
    SharedModule,
    FormModule,
    ReactiveFormsModule,
    DocsComponentsModule,
    NavbarModule,
    CollapseModule,
    NavModule,
    NavbarModule,
    PagesRoutingModule
  ]
})
export class PagesModule {
}
