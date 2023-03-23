import { Component, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { StaffService } from '../staff.service';

@Component({
  selector: 'app-createhotel',
  templateUrl: './createhotel.component.html',
  styleUrls: ['./createhotel.component.scss']
})
export class CreatehotelComponent implements OnInit {
  regform: FormGroup = new FormGroup({});
  constructor( 
    private staffservice : StaffService,
    private toastr:ToastrService) {
    this.regform = new FormGroup({
      staff_name: new FormControl(null, Validators.required),
      city: new FormControl(null, Validators.required),
      locataion: new FormControl(null, Validators.required),
      rating: new FormControl(null,Validators.required)
  
  })
   }
   isValid(controlName: any) {
    return this.regform.controls[controlName].invalid && this.regform.controls[controlName].touched;
  }

  ngOnInit(): void {
  }

  createhotel() {
    const data = this.regform.value;
    if (this.regform.valid) {
      this.staffservice.createhotels(data).subscribe({
        next: (data) => {
          this.toastr.success('successfully created')
        },
        error: (error) => (this.toastr.warning('Error') ),
      });
    }

  }
}
