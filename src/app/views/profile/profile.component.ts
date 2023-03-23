import { Component, OnInit } from '@angular/core';
import { HotelService } from 'src/service/hotel.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  userdetails:any;
  constructor(
    private toastr:ToastrService,
    private hotelservice:HotelService,
    private router: Router
  ) { }

  ngOnInit(): void {
        this.start()
  }
  start(){
    this.hotelservice.getuserdetails().subscribe(data => {
      this.userdetails=data;
    });
    
  }

  delete(){
    this.hotelservice.delete().subscribe(data =>{
    localStorage.removeItem("Authorization");
    this.toastr.warning("User deleted Successfully")
    this.router.navigate(['login'])
    })
  }
  // update(){
  //   this.hotelservice.update().subscribe(data =>{

  //   this.router.navigate(['/dashboad'])
  //   })
  // }

}
