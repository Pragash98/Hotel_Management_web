import { Component, OnInit } from '@angular/core';
import { HotelService } from '../../../../service/hotel.service';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit {
rooms:any;
  constructor(private HotelService: HotelService) { }

  ngOnInit(){
    this.onstart()
  }
  onstart(){
    this.HotelService.getAllrooms().subscribe(data =>{
      this.rooms = data;
    },
    error => {console.log(error);
    }) ;
  }
  }

