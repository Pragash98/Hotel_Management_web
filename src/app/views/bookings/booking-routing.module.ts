import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoomsbookingComponent } from './roomsbooking/roomsbooking.component';
import { SuccessComponent } from './success/success.component';
import { UserbookingComponent } from './userbooking/userbooking.component';
const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Rooms'
    },
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'rooms'
      },
      
      {
        path: 'bookings/:id',
        component: RoomsbookingComponent,
        data: {
          title: `bookings`
        }
      },
      {
        path: 'userbooking',
        component: UserbookingComponent,
        data: {
          title: `user bookings`
        }
      },
      {
        path: 'success',
        component: SuccessComponent,
        data: {
          title: `bookings`
        }
      },
    ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookingRoutingModule {
}
