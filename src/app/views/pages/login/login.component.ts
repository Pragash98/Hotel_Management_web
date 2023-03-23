import { Component, OnInit } from '@angular/core';
import { FormGroup,ReactiveFormsModule,FormBuilder,Validators, FormControl } from '@angular/forms';
import { RouterLink,Route, ActivatedRoute,Router } from '@angular/router';
import { HotelService } from 'src/service/hotel.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  showPassword = false;
  form:FormGroup = new FormGroup({});
  successMessage ="";
  LoginStatus$: any;
  constructor(
    private _router:Router,
    private _activatedRoute:ActivatedRoute,
    private fb:FormBuilder,
    private HotelService: HotelService,
    ) {
      this.form = new FormGroup({
        email:new FormControl(null,Validators.required),
        password:new FormControl(null,Validators.required)
      }); 
     }
     

  ngOnInit(): void {
    
  }
  isValid(controlName: any) {
    return this.form.controls[controlName].invalid && this.form.controls[controlName].touched;
  }
  login() {
    if (this.form.valid) {
      this.HotelService.signin(this.form.value).subscribe( {
        next:(data) => {
          localStorage.setItem('Authorization',JSON.stringify(data));
          this.successMessage = 'Registration Success',
          this._router.navigate(['/viewrooms'])
      },
        error:(error) =>  (this.successMessage = 'Enter your details correctly'),
      });
    }
}
}
