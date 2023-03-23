import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './main-routing.modules';
import { MainpageComponent } from './mainpage.component';
import {
  ButtonGroupModule,
  CollapseModule,
  DropdownModule,
  NavbarModule,
  NavModule,
  SharedModule,
  UtilitiesModule,
  GridModule,
  ButtonModule,
  CardModule,
  FormModule,
  ModalModule
} from '@coreui/angular'

import { IconModule } from '@coreui/icons-angular';
import { DocsComponentsModule } from '@docs-components/docs-components.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    MainpageComponent
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

    MainRoutingModule
  ]
})
export class MainModule { }
