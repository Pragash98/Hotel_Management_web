import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
@Component({
  selector: 'app-viewstaff',
  templateUrl: './viewstaff.component.html',
  styleUrls: ['./viewstaff.component.scss']
})
export class ViewstaffComponent implements OnInit {
staff:any;
  constructor(private adminservice :AdminService) { }

  ngOnInit(): void {
    this.adminservice.getstaffdetails().subscribe(data=>{
      this.staff=data;
      console.log(data);
      
    },error =>{console.log(error);
    });
  }

}
