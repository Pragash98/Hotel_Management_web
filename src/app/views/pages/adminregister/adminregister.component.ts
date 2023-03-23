import { Component, OnInit } from '@angular/core';
import { HotelService } from 'src/service/hotel.service';
import { FormGroup, ReactiveFormsModule, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-adminregister',
  templateUrl: './adminregister.component.html',
  styleUrls: ['./adminregister.component.scss']
})
export class AdminregisterComponent implements OnInit {
  regform: FormGroup = new FormGroup({});
  successMessage = '';
  message: string = '';
  className = 'd-none';
  isProcesing = false;

  constructor(
    private fb: FormBuilder,
    private hotelservice: HotelService) { 
      this.regform = new FormGroup({
        username: new FormControl(null, Validators.required),
        mobile_number: new FormControl(null, Validators.required),
        email: new FormControl(null, Validators.email),
        password: new FormControl(null, Validators.required)

    })
  }
  ngOnInit(): void {
  }
  isValid(controlName: any) {
    return this.regform.controls[controlName].invalid && this.regform.controls[controlName].touched;
  }
  adminsignup() {
    this.isProcesing = true;
    const data = this.regform.value;
    if (this.regform.valid) {
      this.hotelservice.adminsignup(data).subscribe({
        next: (data) => {
          this.successMessage = 'Registration Success'
        },
        error: (error) => (this.successMessage = 'Some error'),
      });
    }
  }
}
