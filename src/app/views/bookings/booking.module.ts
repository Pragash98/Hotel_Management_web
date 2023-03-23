import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { BookingRoutingModule } from './booking-routing.module';
import { RoomsComponent } from './rooms/rooms.component';
import { RoomsbookingComponent } from './roomsbooking/roomsbooking.component'
import { ButtonModule, CardModule, FormModule } from '@coreui/angular';
import { FormsModule } from '@angular/forms';
import { UserbookingComponent } from './userbooking/userbooking.component';

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
// import { ButtonsRoutingModule } from '../buttons/buttons-routing.module';
import { IconModule } from '@coreui/icons-angular';
import { DocsComponentsModule } from '@docs-components/docs-components.module';
import { SuccessComponent } from './success/success.component';

@NgModule({
  declarations: [
    RoomsComponent,
    RoomsbookingComponent,
    UserbookingComponent,
    SuccessComponent,
],
  imports: [
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
    CommonModule,
    FormsModule,
    BookingRoutingModule,
  ]
})
export class BoookingModule { }
