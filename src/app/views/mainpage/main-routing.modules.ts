import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { AuthGuard } from 'src/app/auth-guard.service';
import { MainpageComponent } from './mainpage.component';

const routes: Routes = [

  {
    path: '',
    data: {
      title: 'mainpage'
    },
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'mainpage'
      },
      {
        path: 'mainpage',
        component: MainpageComponent,
        data: {
          title: `viewuser`
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule {
}

