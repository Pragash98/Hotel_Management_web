import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { reduceEachTrailingCommentRange } from 'typescript/lib/tsserverlibrary';
// import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class HotelService {
  private Url= "/api/";
  private apiurl = this.Url +'hotel/';
  private userurl = this.Url+'user/';
  private roomurl = this.Url+'room/';
  private adminurl =this.Url+'admin/'
  private staffurl = this.Url+'staff/';
  constructor(
    private http: HttpClient
    ) { }

  getAllHotels(): Observable<any>{
    return this.http.get(this.apiurl + 'view');
  }

  getuserdetails(): Observable<any>{
    return this.http.get(this.userurl+'view_user')
  }

  signup(body:any): Observable<any>{
    return this.http.post(this.Url + 'user/create_user',body,{
      observe:'body',
    });
  }

  adminsignin(body: any): Observable<any> {
    return this.http.post(this.adminurl + 'login_admin', body, {
      observe: 'body',
    });
  }

  staffsignin(body: any): Observable<any> {
    return this.http.post(this.staffurl + 'login_staff', body, {
      observe: 'body',
    });
  }

  adminsignup(body: any): Observable<any> {
    return this.http.post(this.adminurl + 'create_admin', body, {
      observe: 'body',
    });
  }
  signin(body:any): Observable<any>{
    return this.http.post(this.userurl+ 'loginuser',body,{
      observe:'body',
    });
  }
  delete():Observable<any>{
    return this.http.delete(this.userurl+'deleteuser')
  }

  update(body:any): Observable<any>{
    return this.http.put(this.userurl+ 'updateuser',body,{
      observe:'body',
    });
  }

  getAllrooms(): Observable<any>{
    return this.http.get(this.roomurl + 'viewroom');
  }

  generateRating() {
    return Math.floor(Math.random() * Math.floor(5)+1);
}
bookhotel(id:any){  
  return this.http.get(this.roomurl+'viewroom/'+id);
}
}
