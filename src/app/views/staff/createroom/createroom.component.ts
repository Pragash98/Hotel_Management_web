import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { StaffService } from '../staff.service';

@Component({
  selector: 'app-createroom',
  templateUrl: './createroom.component.html',
  styleUrls: ['./createroom.component.scss']
})
export class CreateroomComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  hotels: any;
  id: any;
  hotelinfo: any;
  hotelname: any;
  hotelid: any;

  constructor(
    private toastrr: ToastrService,
    private staffservice: StaffService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.form = new FormGroup({
      hotel: new FormControl(null,Validators.required),
      price: new FormControl(null, Validators.required),
      max_guests: new FormControl(null, Validators.required),
      roomImage: new FormControl(null, Validators.required),
    })
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.showhotels()
    this.booking()
  }

  showhotels() {
    this.staffservice.viewhotels(this.id).subscribe({
      next: (data: any) => {
        this.hotelid = data._id;
        this.hotelname = data.hotel_name;
      },
      error: error => { console.log(error); }
    })
  }

  booking(){
    const data = this.form.value;
    if (this.form.valid) {
      this.staffservice.createroom(data, this.imageFile ).subscribe({
        next: (data) => {
          this.toastrr.success("Room Successfully created")
        },
        error: (error) => {
          this.toastrr.success("error")
        },
      });
    }
  }

  imageFile:any;
  onFileChange(event:any){
   this.imageFile=event.target.files[0];
    console.log("event",event.target.files[0]);
    
  }


}