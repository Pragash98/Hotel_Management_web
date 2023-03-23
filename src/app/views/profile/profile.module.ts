import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from '../profile/profile.component'
import {ProfileRoutingModule} from './profile-routing.module'
import {
  ButtonGroupModule,
  CollapseModule,
  DropdownModule,
  NavbarModule,
  NavModule,
  SharedModule,
  UtilitiesModule,
  GridModule,
  ButtonModule
} from '@coreui/angular'


@NgModule({
  declarations: [
    ProfileComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    ButtonGroupModule,
    ProfileRoutingModule,
    ButtonGroupModule, 
    CollapseModule,
    DropdownModule,
    NavbarModule,
    NavModule,
    SharedModule,
    UtilitiesModule,
    GridModule
  ]
})
export class ProfileModule { }
