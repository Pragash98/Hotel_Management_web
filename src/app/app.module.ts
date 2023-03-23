import { NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth-guard.service';

import { Title } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import {LoginshowService} from './service/loginshow.service'
import { interceptor } from './interceptor'
import { ToastrModule } from 'ngx-toastr';
import {
  PERFECT_SCROLLBAR_CONFIG,
  PerfectScrollbarConfigInterface,
  PerfectScrollbarModule,
} from 'ngx-perfect-scrollbar';

// Import routing module
import { AppRoutingModule } from './app-routing.module';

// Import app component
import { AppComponent } from './app.component';

// Import containers
import {
  DefaultFooterComponent,
  DefaultHeaderComponent,
  DefaultLayoutComponent,
} from './containers';

import {
  AvatarModule,
  BadgeModule,
  BreadcrumbModule,
  ButtonGroupModule,
  ButtonModule,
  CardModule,
  DropdownModule,
  FooterModule,
  FormModule,
  GridModule,
  HeaderModule,
  ListGroupModule,
  ModalModule,
  NavModule,
  ProgressModule,
  SharedModule,
  SidebarModule,
  TabsModule,
  UtilitiesModule,
 
} from '@coreui/angular';

import { AccordionModule } from 'primeng/accordion';     //accordion and accordion tab
import { MenuItem } from 'primeng/api';  

import { IconModule, IconSetService } from '@coreui/icons-angular';
import { ProfileModule } from './views/profile/profile.module';
import { BoookingModule } from './views/bookings/booking.module';
import { ViewuserComponent } from './views/admin/viewuser/viewuser.component';
import { PagesModule } from './views/pages/pages.module';
import { MainModule  } from './views/mainpage/main.module';
import { StaffModule } from './views/staff/staff.module';
import { ViewRoomsModule } from './views/viewrooms/viewrooms.module';


const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
};

const APP_CONTAINERS = [
  DefaultFooterComponent,
  DefaultHeaderComponent,
  DefaultLayoutComponent,
];

@NgModule({
  declarations: [AppComponent, ...APP_CONTAINERS
  ],
  imports: [
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    AppRoutingModule,
    AvatarModule,
    BreadcrumbModule,
    FooterModule,
    DropdownModule,
    GridModule,
    HeaderModule,
    SidebarModule,
    IconModule,
    PerfectScrollbarModule,
    NavModule,
    ButtonModule,
    FormsModule,
    UtilitiesModule,
    ButtonGroupModule,
    FormModule,
    ReactiveFormsModule,
    SidebarModule,
    SharedModule,
    TabsModule,
    ListGroupModule,
    ProgressModule,
    BadgeModule,
    ListGroupModule,
    CardModule,
    HttpClientModule,
    ProfileModule,
    BoookingModule,
    PagesModule,
    MainModule,
    StaffModule,
    ViewRoomsModule,
    AccordionModule,
    
  
  ],
  providers: [ AuthService,AuthGuard,
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy,
    },
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: interceptor,
      multi: true
    },
    IconSetService,
    Title,
    LoginshowService,

  ],
 
  bootstrap: [AppComponent],
})
export class AppModule {
}
