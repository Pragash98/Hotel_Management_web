import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { DashboardChartsData, IChartProps } from './dashboard-charts-data';
import { HotelService } from 'src/service/hotel.service';

interface IUser {
  name: string;
  state: string;
  registered: string;
  country: string;
  usage: number;
  period: string;
  payment: string;
  activity: string;
  avatar: string;
  status: string;
  color: string;
}

@Component({
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  hotels: any;
  constructor(private HotelService: HotelService ) {
  }


  ngOnInit(){
   this.start()
  }
  start(){
    this.HotelService.getAllHotels().subscribe(data => {
      this.hotels=data;
    }, error => {console.log(error);
    });

  }

  bookhotel(){
    
  }
}
