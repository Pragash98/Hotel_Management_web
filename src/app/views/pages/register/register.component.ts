import { Component, OnInit } from '@angular/core';
import { HotelService } from 'src/service/hotel.service';
import { FormGroup, ReactiveFormsModule, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  successMessage = '';
  message: string = '';
  className = 'd-none';
  isProcesing = false;
  constructor(
    private fb: FormBuilder,
    private HotelService: HotelService) {
    this.form = new FormGroup({
      user_name: new FormControl(null, Validators.required),
      address: new FormControl(null, Validators.required),
      dob: new FormControl(null, Validators.required),
      mobile_number: new FormControl(null, Validators.required),
      email: new FormControl(null, Validators.email),
      password: new FormControl(null, Validators.required)
    })
  }
  ngOnInit(): void {
  }
  isValid(controlName: any) {
    return this.form.controls[controlName].invalid && this.form.controls[controlName].touched;
  }

  signup() {
    this.isProcesing = true;
    const data = this.form.value;
    if (this.form.valid) {
      this.HotelService.signup(data).subscribe({
        next: (data) => {
          this.successMessage = 'Registration Success'
        },
        error: (error) => (this.successMessage = 'Some error'),
      });
    }
  }

  //   res=>{
  //   if(res.success){
  //   this.isProcesing = false;
  //   this.message='Account created';
  //   this.className = 'alert alert-success'
  //   }
  //   else{
  //   this.isProcesing = false;
  //   this.message=res.message;
  //   this.className = 'alert alert-danger'
  //   }
  // },
  // err=>{
  //   this.isProcesing = false;
  //   this.message='server error';
  //   this.className = 'alert alert-danger'
  // })
  getClassName() {
    return this.className;
  }

}
