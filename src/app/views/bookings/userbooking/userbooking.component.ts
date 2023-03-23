import { Component, OnInit } from '@angular/core';
import { BookingService } from '../bookingservice.service';
@Component({
  selector: 'app-userbooking',
  templateUrl: './userbooking.component.html',
  styleUrls: ['./userbooking.component.scss']
})
export class UserbookingComponent implements OnInit {
  usersbooking: any;
  constructor(private bookingservice:BookingService) { }

  ngOnInit(): void {
      this.bookingservice.userbooking().subscribe(data => {
      this.usersbooking = data;
      console.log(this.usersbooking);
      
    },
      error => {
        console.log(error);
      });
  }

}
