import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BehaviorSubject, Observable } from 'rxjs';
import { ClassToggleService, HeaderComponent } from '@coreui/angular';
import { Router } from '@angular/router';
import { HotelService } from 'src/service/hotel.service';
import { LoginshowService } from 'src/app/service/loginshow.service';
import { AdminService } from 'src/app/views/admin/admin.service';


@Component({
  selector: 'app-default-header',
  templateUrl: './default-header.component.html',
})
export class DefaultHeaderComponent implements OnInit {

  // LoginStatus$ = new BehaviorSubject<boolean>(null);
  // Username$ : Observable<string>;

  @Input() sidebarId: string = "sidebar";

  public val: any;
  hotels: any;
  public showlogout: any;
  userdetail: any;
  admin: any;
  staff: any;
  currentUserRole: any;

  constructor(private HotelService: HotelService, private router: Router, private show: LoginshowService,private adminservice : AdminService) {

  }

  ngOnInit(): void {
    this.currentUserRole = JSON.parse(localStorage.getItem("Authorization") || '{}');
    this.currentUserRole = this.currentUserRole['role'];
    console.log(this.currentUserRole);
    this.start()
    
  }
  start() {
    this.val = this.show.showlogiin();
    this.showlogout = !this.val;
  }
 
  staffdetails(){
    this.adminservice.getstaffdetails().subscribe(data =>{
      this.staff = data;
      console.log("staffffffffffffffffffffff",this.staff);
      this.staff = this.staff[0];
      
    })
  } 
  logout() {
    localStorage.removeItem("Authorization");
    this.start();
    this.router.navigate(['/mainpage']);
    // window.location.reload();      
  }
}
