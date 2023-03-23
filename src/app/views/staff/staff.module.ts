import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StaffRoutingModule } from './staff-routing.modules'
import { CreatehotelComponent } from './createhotel/createhotel.component';
import { ViewhotelComponent } from './viewhotel/viewhotel.component';
import { EdithotelComponent } from './edithotel/edithotel.component';

import { ButtonModule, CardModule, FormModule, GridModule, ModalModule } from '@coreui/angular';


import {
  ButtonGroupModule,
  CollapseModule,
  DropdownModule,
  NavbarModule,
  NavModule,
  SharedModule,
  UtilitiesModule
} from '@coreui/angular'
import { IconModule } from '@coreui/icons-angular';
import { DocsComponentsModule } from '@docs-components/docs-components.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateroomComponent } from './createroom/createroom.component';

@NgModule({
  declarations: [
    CreatehotelComponent,
    ViewhotelComponent,
    EdithotelComponent,
    CreateroomComponent
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

    StaffRoutingModule
  ]
})
export class StaffModule { }
