import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from '../admin.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalService } from '@coreui/angular';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-viewuser',
  templateUrl: './viewuser.component.html',
  styleUrls: ['./viewuser.component.scss']
})

export class ViewuserComponent implements OnInit {
  public visible = false;
  users: any;
  user: any;
  id: any;
  userinfo: any;
  constructor(private toastrr: ToastrService,
     private adminservice: AdminService,private router:Router,
     private activateroute:ActivatedRoute) { }

  ngOnInit(): void {
    this.onstart();
  }

  onstart() {
    this.adminservice.getuserdetails().subscribe(data => {
      this.users = data;
      console.log(data);

    }, error => {
      console.log(error);
    });
  }


  deleteuser(id: any) {
    this.adminservice.deleteOneuser(id).subscribe({
      next: (data: any) => {
        console.log(data);
        this.toastrr.success("User deleted Successfully")
        this.onstart()
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  view(id: any) {
    this.adminservice.viewuser(id).subscribe({
      next: (data: any) => {
        console.log(data);
        this.userinfo = data;
        this.router.navigate(['/admin/viewuserdetails',id], {relativeTo:this.activateroute})
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  edituser(id: any) {
    this.adminservice.viewuser(id).subscribe({
      next: (data: any) => {
        console.log(data);
        this.userinfo = data;
        this.router.navigate(['../edituser',id], {relativeTo:this.activateroute})
      },
      error: (err) => {
        console.log(err);
      },
    });
  }


  
}
