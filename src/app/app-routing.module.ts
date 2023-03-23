import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DefaultLayoutComponent } from './containers';
import { Page404Component } from './views/pages/page404/page404.component';
import { Page500Component } from './views/pages/page500/page500.component';
import { LoginComponent } from './views/pages/login/login.component';
import { RegisterComponent } from './views/pages/register/register.component';
import { AdminloginComponent } from './views/pages/adminlogin/adminlogin.component';
import { AdminregisterComponent } from './views/pages/adminregister/adminregister.component';
import { MainpageComponent } from './views/mainpage/mainpage.component';
import { AuthGuard } from './auth-guard.service';
import { RoleGuard } from './role-guard.service'
import { StaffloginComponent } from './views/pages/stafflogin/stafflogin.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path:'stafflogin',
    component: StaffloginComponent
  },
  {
    path:'mainpage',
    component: MainpageComponent
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'adminlogin',
    component: AdminloginComponent
  },
  {
    path:'adminregister',
    component: AdminregisterComponent
  },
  {
    path:'register',
    component: RegisterComponent
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./views/dashboard/dashboard.module').then((m) => m.DashboardModule)
      },
      // {
      //   path: 'theme',
      //   loadChildren: () =>
      //     import('./views/theme/theme.module').then((m) => m.ThemeModule)
      // },
      // {
      //   path: 'base',
      //   loadChildren: () =>
      //     import('./views/base/base.module').then((m) => m.BaseModule)
      // },
      // {
      //   path: 'buttons',
      //   loadChildren: () =>
      //     import('./views/buttons/buttons.module').then((m) => m.ButtonsModule)
      // },
      // {
      //   path: 'forms',
      //   loadChildren: () =>
      //     import('./views/forms/forms.module').then((m) => m.CoreUIFormsModule)
      // },
      // {
      //   path: 'charts',
      //   loadChildren: () =>
      //     import('./views/charts/charts.module').then((m) => m.ChartsModule)
      // },
      // {
      //   path: 'icons',
      //   loadChildren: () =>
      //     import('./views/icons/icons.module').then((m) => m.IconsModule)
      // },
      // {
      //   path: 'notifications',
      //   loadChildren: () =>
      //     import('./views/notifications/notifications.module').then((m) => m.NotificationsModule)
      // },
      // {
      //   path: 'widgets',
      //   loadChildren: () =>
      //     import('./views/widgets/widgets.module').then((m) => m.WidgetsModule)
      // },
      {
        path: 'pages',
        loadChildren: () =>
          import('./views/pages/pages.module').then((m) => m.PagesModule)
      },
      {
        path:'profile',
        loadChildren:() =>
        import('./views/profile/profile.module').then((m) => m.ProfileModule),canActivate:[AuthGuard],
      },
      // {
        
      //   path:'rms',
      //   loadChildren:() =>
      //   import('./views/room/rooms/rooms.module').then((m) => m.RoomsModule)
      // },
      {
        path:'rooms',
        loadChildren:() =>
        import('./views/bookings/booking.module').then((m)=>m.BoookingModule ),canActivate:[AuthGuard],
      },
      {
        path:'admin',
        loadChildren:() =>
        import('./views/admin/admin.module').then((m)=>m.AdminModule ),canActivate:[AuthGuard],
      },
      {
        path:'staff',
        loadChildren:() =>
        import('./views/staff/staff.module').then((m)=>m.StaffModule ),canActivate:[AuthGuard],
      },
      {
        path:'viewrooms',
        loadChildren:() =>
        import('./views/viewrooms/viewrooms.module').then((m) => m.ViewRoomsModule),canActivate:[AuthGuard],
      },
    ]
  },
  {
    path: '404',
    component: Page404Component,
    data: {
      title: 'Page 404'
    }
  },
  {
    path: '500',
    component: Page500Component,
    data: {
      title: 'Page 500'
    }
  },
  {path: '**', redirectTo: 'dashboard'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'top',
      anchorScrolling: 'enabled',
      initialNavigation: 'enabledBlocking'
      // relativeLinkResolution: 'legacy'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
