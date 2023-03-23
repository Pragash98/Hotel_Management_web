import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page404Component } from './page404/page404.component';
import { Page500Component } from './page500/page500.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {AdminloginComponent} from './adminlogin/adminlogin.component';
import {AdminregisterComponent} from './adminregister/adminregister.component';
import { StaffloginComponent } from './stafflogin/stafflogin.component';
const routes: Routes = [
  {
    path: 'adminlogin',
    component: AdminloginComponent,
    data: {
      title: 'Login Page'
    }
  },
  {
    path: 'stafflogin',
    component: StaffloginComponent,
    data: {
      title: 'staff login Page'
    }
  },
  {
    path: 'adminregister',
    component: AdminregisterComponent,
    data: {
      title: 'Register Page'
    }
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
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: {
      title: 'Register Page'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {
}
