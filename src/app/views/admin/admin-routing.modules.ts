import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/auth-guard.service';
import { EdituserComponent } from './edituser/edituser.component';
import { StaffregisterComponent } from './staffregister/staffregister.component';
import { ViewstaffComponent } from './viewstaff/viewstaff.component';
import { ViewuserComponent } from './viewuser/viewuser.component';
import { ViewuserdetailsComponent } from './viewuserdetails/viewuserdetails.component';

const routes: Routes = [

  {
    path: '',
    data: {
      title: 'admins'
    },
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'admin'
      },
      {
        path: '',
        component: ViewuserComponent,
       
        data: {
          title: `viewuser`
        }
      }, 
      {
        path: 'viewuser',
        component: ViewuserComponent,
        
        data: {
          title: 'viewuser Page'
        }
      },
      {
        path: 'edituser/:id',
        component: EdituserComponent,
        
        data: {
          title: 'edit user Page'
        }
      },
      {
        path: 'viewuserdetails/:id',
        component: ViewuserdetailsComponent,
    
        data: {
          title: 'viewuserdetails Page'
        }
      },
      {
        path: 'staffregister',
        component: StaffregisterComponent,
       
        data: {
          title: 'staff register'
        }
      },
      {
        path: 'viewstaff',
        component: ViewstaffComponent,
      
        data: {
          title: 'viewstaff'
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {
}

