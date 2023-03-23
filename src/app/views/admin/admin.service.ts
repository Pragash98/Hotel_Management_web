import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private Url = "/api/";
  private adminurl = this.Url + 'admin/';
  private USERnurl = this.Url + 'user/';
  private staffurl = this.Url + 'staff/';
  constructor(private http: HttpClient) { }


  // showsuccess(message,title) {
  //   this.toastr.success(message, title)
  // }
  getuserdetails() {
    return this.http.get(this.adminurl + 'view_users');
  }
  
  viewuser(id:any){
  return this.http.get(this.USERnurl+'view_userby/'+id);
  }

  edituserdata(id:any,body: any){
    return this.http.put(this.USERnurl+'update_user/'+id,body,{
      observe:'body',
    });
  }

  deleteOneuser(id: any) {
    return this.http.delete(this.USERnurl + 'delete_user/' + id);
  }

  getstaffdetails() {
    return this.http.get(this.staffurl + 'viewstaff');
  }

  staffsignup(body: any): Observable<any> {
    return this.http.post(this.staffurl + 'createstaff', body, {
      observe: 'body',
    });
  }
 
}
