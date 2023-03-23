import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { StaffService } from '../staff.service';
import { ToastrService } from 'ngx-toastr';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-viewhotel',
  templateUrl: './viewhotel.component.html',
  styleUrls: ['./viewhotel.component.scss']
})

export class ViewhotelComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  public visible = false;
  hotels: any;
  hotelid: any;
  hotel_id:any;
  roominfo: any;
  hotel_name: any;
  city: any;
  location: any;
  rating: any;
  hoteludetails: any;

  constructor(private staffservice: StaffService,
    private toastrr: ToastrService,
    private activateroute: ActivatedRoute,
    private router: Router
  ) {
    this.form = new FormGroup({
      hotel_name: new FormControl(null, Validators.required),
      city: new FormControl(null, Validators.required),
      location: new FormControl(null, Validators.required),
      rating: new FormControl(null, Validators.required),
    });
  }

  ngOnInit(): void {
    this.start()
  }

  start() {
    this.staffservice.getAllHotels().subscribe(data => {
      this.hotels = data;
    }, error => {
      console.log(error);
    });
  }

  back() {
    this.visible = !this.visible;
  }

  handleLiveDemoChange(event: any) {
    this.visible = event;
  }

  createroom(id: any) {
    this.staffservice.viewhotels(id).subscribe({
      next: (data: any) => {
        this.roominfo = data;
        this.router.navigate(['staff/createroom', id])
      },
      error: error => { console.log(error); }
    })
  }


  viewhotel(id: any) {
    this.visible = !this.visible;
    this.staffservice.viewhotels(id).subscribe(data => {
      this.hotelid = data;
    }, error => {
      console.log(error);
    })
  }

  update_hotel(id: any) {
    this.visible = !this.visible;
    this.staffservice.viewhotels(id).subscribe(data => {
      this.hoteludetails = data;
      // this.hotel_id = this.hotelid._id;
      this.hotel_name = this.hoteludetails.hotel_name;
      this.city = this.hoteludetails.city;
      this.location = this.hoteludetails.location;
      this.rating = this.hoteludetails.rating;

    }, error => {
      console.log(error);
    })
  }

  updatehotel() {
    this.visible = !this.visible;
    const data = this.form.value;
    this.staffservice.updatehotel(this.hotel_id, data).subscribe({
      next: (data) => {
        this.toastrr.success("User updated Successfully")
        this.router.navigate(['admin/viewuser'])
      },
      error: (error) => (this.toastrr.warning("error")),
    });
  }


  deletehotel(id: any) {
    if (confirm("Are you sure to delete ")) {
      this.staffservice.deletehotel(id).subscribe({
        next: (data: any) => {
          console.log(data);
          this.toastrr.success("Hotel deleted Successfully")
          this.start()
        },
        error: (err) => {
          console.log(err);
        },
      });
    }
  }
}
