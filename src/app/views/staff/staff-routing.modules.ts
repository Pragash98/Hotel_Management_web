import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatehotelComponent } from './createhotel/createhotel.component';
import { CreateroomComponent } from './createroom/createroom.component';
import { EdithotelComponent } from './edithotel/edithotel.component';
import { ViewhotelComponent } from './viewhotel/viewhotel.component';

const routes: Routes = [

  {
    path: '',
    data: {
      title: 'staff'
    },
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'staff'
      },
      {
        path: 'viewhotel',
        component: ViewhotelComponent,
        data: {
          title: `view hotel`
        }
      },
      {
        path: 'createhotel',
        component: CreatehotelComponent,
        data: {
          title: `view hotel`
        }
      }, 
      {
        path: 'updatehotel',
        component: EdithotelComponent,
        data: {
          title: `edit login`
        }
      }, 
      {
        path: 'createroom/:id',
        component: CreateroomComponent,
        data:{
          title: `creating rooms for hotel`
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StaffRoutingModule {
}

