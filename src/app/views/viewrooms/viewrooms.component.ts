import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { Router } from '@angular/router';
import { HotelService } from 'src/service/hotel.service';


@Component({
  selector: 'app-rooms',
  templateUrl: './viewrooms.component.html',
  styleUrls: ['./viewrooms.component.scss']
})
export class ViewRoomsComponent implements OnInit {
  rooms: any;
  id: any;
  roominfo: any;
  url:any;
  constructor(private hotelService: HotelService , private primengConfig: PrimeNGConfig,private router: Router) { }

  ngOnInit() {
    this.onstart()
  }
  onstart() {
    this.hotelService.getAllrooms().subscribe(data => {
      this.rooms = data;
      this.url = "http://localhost:5000/"
    },
      error => {
        console.log(error);
      });
  }
  bookhotel(id:any) {
    // this.id = this.route.snapshot.params['id'];
    this.hotelService.bookhotel(id).subscribe({
      next: (data: any) => {
        // this.id=data;
        this.roominfo = data;
        console.log(data);
        this.router.navigate(['rooms/bookings',id])
      },
      error: error => { console.log(error); }
    })
  }
}

