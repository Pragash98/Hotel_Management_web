import { Component, OnInit,NgModule } from '@angular/core';
import { FormBuilder, FormControl, FormGroup,ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BookingService } from '../bookingservice.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-roomsbooking',
  templateUrl: './roomsbooking.component.html',
  styleUrls: ['./roomsbooking.component.scss']
})
export class RoomsbookingComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  rooms:any;
  id:any;
  price: any;
  hotelname: any;
  guest: any;
  successMessage='';

  constructor(
    private toastrr: ToastrService,
    private fb:FormBuilder,
    private bookingservice: BookingService,
    private route: ActivatedRoute,
    private router:Router
  ) { 
    this.form = new FormGroup({
      room_id: new FormControl(null, Validators.required),
      from_date: new FormControl(null, Validators.required),
      to_date: new FormControl(null, Validators.required),
  })
  }
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.showrooms()
    this.booking()
  }

  showrooms(){
    this.bookingservice.bookhotel(this.id).subscribe({
          next: (data: any) => {
            this.id = data._id;
            this.price = data.price
            this.guest = data.max_guests;
          },
          error: error => { console.log(error); }
        })
  }
  
  booking(){
    const data = this.form.value;
    console.log("data:",data);
    
    if (this.form.valid) {
      this.bookingservice.booking(data).subscribe({
        next: (data) => {
          this.successMessage = 'Booking Success'
          this.toastrr.success("Booking Successfully")
        },
        error: (error) => (this.successMessage = ' error'),
      });
    }
  }
}
