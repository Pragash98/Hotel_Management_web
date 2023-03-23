import { Component, OnInit } from '@angular/core';
import { HotelService } from 'src/service/hotel.service';
import { FormGroup, ReactiveFormsModule, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.scss']
})
export class AdminloginComponent implements OnInit {
  regform: FormGroup = new FormGroup({});
  successMessage = '';
  message: string = '';
  className = 'd-none';
  constructor(private hotelservice: HotelService,private _router:Router,
    private _activatedRoute:ActivatedRoute,) { 
    this.regform = new FormGroup({
      mobile_number: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),


  })
}
  ngOnInit(): void {
  }
  isValid(controlName: any) {
    return this.regform.controls[controlName].invalid && this.regform.controls[controlName].touched;
  }
  adminlogin() {
    const data = this.regform.value;
    if (this.regform.valid) {
      this.hotelservice.adminsignin(this.regform.value).subscribe({
        next: (data) => {
          localStorage.setItem('Authorization',JSON.stringify(data));
          this.successMessage = 'login Success',
          this._router.navigate(['/admin/viewstaff'])
        },
        error: (error) => (this.successMessage = 'Some error'),
      });
    }
  }
}
