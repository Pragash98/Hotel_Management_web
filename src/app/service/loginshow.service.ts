import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginshowService {
 
  showlogin: boolean= true;
  var: any;
  constructor() { }
   
  showlogiin(){
    if(localStorage.getItem('Authorization')){
      this.showlogin = false;
    }else{
      this.showlogin = true;
    }
    return this.showlogin;
  }

}
