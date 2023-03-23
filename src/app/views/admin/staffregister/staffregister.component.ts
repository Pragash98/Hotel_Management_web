import { Component, OnInit } from '@angular/core';
import { AdminService} from '../admin.service';
import { FormGroup, ReactiveFormsModule, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-staffregister',
  templateUrl: './staffregister.component.html',
  styleUrls: ['./staffregister.component.scss']
})
export class StaffregisterComponent implements OnInit {
  regform: FormGroup = new FormGroup({});
  successMessage = '';
  message: string = '';
  className = 'd-none';
  constructor( private adminService: AdminService){
   this.regform = new FormGroup({
    staff_name: new FormControl(null, Validators.required),
    mobile_number: new FormControl(null, Validators.required),
    password: new FormControl(null, Validators.required)

})
} 
isValid(controlName: any) {
  return this.regform.controls[controlName].invalid && this.regform.controls[controlName].touched;
}
  ngOnInit(): void {
  }
  staffsignup() {
    const data = this.regform.value;
    if (this.regform.valid) {
      this.adminService.staffsignup(data).subscribe({
        next: (data) => {
          this.successMessage = 'Staff Registration Success'
        },
        error: (error) => (this.successMessage = 'Some error'),
      });
    }
  }
}
