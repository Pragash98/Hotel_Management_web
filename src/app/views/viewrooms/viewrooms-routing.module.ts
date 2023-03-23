import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ViewRoomsComponent } from  './viewrooms.component'

const routes: Routes = [
  {
    path: '',
    component: ViewRoomsComponent,
    data: {
      title: `rooms`
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewRoomsRoutingModule {
}
