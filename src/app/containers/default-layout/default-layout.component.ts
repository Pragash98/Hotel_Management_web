import { Component, OnInit } from '@angular/core';

import { adminnavItems, emptynavItems, usernavItems,staffnavItems } from './_nav';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html',
})
export class DefaultLayoutComponent  implements OnInit{

  public navItems:any;
  currentUser = JSON.parse(localStorage.getItem('Authorization') || '{}')
  currentUserRole: any;

  public perfectScrollbarConfig = {
    suppressScrollX: true,
  };

  constructor() {}

  ngOnInit(): void {
    this.currentUserRole = this.currentUser.role;
    if(this.currentUserRole === 'admin'){
      this.navItems = adminnavItems;
    } else if(this.currentUserRole === 'user'){
      this.navItems = usernavItems;
    }
    else if(this.currentUserRole === 'staff'){
      this.navItems = staffnavItems;
    } else{
      this.navItems = emptynavItems;
    }
}
}
