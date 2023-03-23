import { Component, OnInit } from '@angular/core';
import { BookingService } from '../bookingservice.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit {
  rooms: any;
  id: any;
  roominfo: any;
  constructor(private BookingService: BookingService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.BookingService.getAllrooms().subscribe(data => {
      this.rooms = data;
    },
      error => {
        console.log(error);
      });

  }
  bookhotel(id:any) {
    // this.id = this.route.snapshot.params['id'];
    this.BookingService.bookhotel(id).subscribe({
      next: (data: any) => {
        // this.id=data;
        this.roominfo = data;
        console.log(data);
        this.router.navigate(['rooms/bookings',id])
      },
      error: error => { console.log(error); }
    })
  }
  // onStart() {
  //   this.BookingService.bookhotel(this.id).subscribe({
  //     next: (data: any) => {
  //       this.roominfo = data;
  //       console.log(data);
  //       this.router.navigate(['bookings', this.id])
  //     },
  //     error: error => { console.log(error); }
  //   })
  // }
}
