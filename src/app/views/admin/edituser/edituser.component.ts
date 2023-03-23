import { Component, OnInit } from '@angular/core';
import { FormGroup,ReactiveFormsModule,FormBuilder,FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.scss']
})
export class EdituserComponent implements OnInit {
  form: FormGroup = new FormGroup({});

  id:any;
  user_name:any;
  city:any;
  dob:any;
  mobno:any;
  email:any;
  constructor(
    private adminservice:AdminService,
    private router: Router,
    private route:ActivatedRoute,
    private toastr:ToastrService,) { 
      this.form = new FormGroup({
        user_name: new FormControl(null, Validators.required),
        address: new FormControl(null, Validators.required),
        dob: new FormControl(null, Validators.required),
        email: new FormControl(null, Validators.required),
        mobile_number: new FormControl(null, Validators.required),
    })  
    }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.edituser()
  }
  edituser(){
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
 update(){
  const data = this.form.value;
    this.adminservice.edituserdata(this.id,data).subscribe({
      next: (data) => {
        this.toastr.success("User updated Successfully")
        this.router.navigate(['admin/viewuser'])
      },
      error: (error) => ( this.toastr.warning("error")),
    });
 }


}
