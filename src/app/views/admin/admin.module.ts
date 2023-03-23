import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewuserComponent } from './viewuser/viewuser.component';
import { AdminRoutingModule } from './admin-routing.modules';
import { ButtonModule, CardModule, FormModule, ModalModule } from '@coreui/angular';

import {
  ButtonGroupModule,
  CollapseModule,
  DropdownModule,
  NavbarModule,
  NavModule,
  SharedModule,
  UtilitiesModule,
  GridModule
} from '@coreui/angular'

import { IconModule } from '@coreui/icons-angular';
import { DocsComponentsModule } from '@docs-components/docs-components.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StaffregisterComponent } from './staffregister/staffregister.component';
import { ViewstaffComponent } from './viewstaff/viewstaff.component';
import { ViewuserdetailsComponent } from './viewuserdetails/viewuserdetails.component';
import { EdituserComponent } from './edituser/edituser.component';

@NgModule({
  declarations: [
    ViewuserComponent,
    StaffregisterComponent,
    ViewstaffComponent,
    ViewuserdetailsComponent,
    EdituserComponent

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
    FormsModule,
    ModalModule,

    AdminRoutingModule
  ]
})
export class AdminModule { }
