import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-viewuserdetails',
  templateUrl: './viewuserdetails.component.html',
  styleUrls: ['./viewuserdetails.component.scss']
})
export class ViewuserdetailsComponent implements OnInit {

  id:any;
  user_name:any;
  city:any;
  dob:any;
  mobno:any;
  email:any;
  
  constructor(private adminservice:AdminService,
    private route: ActivatedRoute,
    ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.showuser()
  }
  showuser(){
    this.adminservice.viewuser(this.id).subscribe({
          next: (data: any) => {
            this.user_name=data.user_name;
            this.city=data.address;
            this.dob=data.dob.split('T')[0];
            this.mobno=data.mobile_number;
            this.email=data.email;
            
          },
          error: error => { console.log(error); }
        })
  }
}
