import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/auth-guard.service';
import {ProfileComponent} from './profile.component'

const routes: Routes = [
  {
    path: '',
    component: ProfileComponent,
    data: {
      title: 'profile'
    },
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule {
}
