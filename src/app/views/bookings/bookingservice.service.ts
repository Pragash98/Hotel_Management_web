import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { reduceEachTrailingCommentRange } from 'typescript/lib/tsserverlibrary';
// import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  roomdetails:any;
  private Url= "/api/";
  private apiurl = this.Url +'hotel/';
  private bookurl = this.Url+'user/';
  private roomurl = this.Url+'room/';
  private bookingurl = this.Url+'booking/';
  constructor(
    private http: HttpClient
    ) { }

    getAllrooms(): Observable<any>{
      return this.http.get(this.roomurl + 'viewroom');
    }
      
    bookhotel(id:any){  
      return this.http.get(this.roomurl+'viewroom/'+id);
    }

    booking(body:any): Observable<any>{
      return this.http.post(this.bookingurl+'bookroom',body,{
        observe:'body',
      });
    }

    userbooking(): Observable<any>{
      return this.http.get(this.bookingurl+'viewusersbooking');
    }
    
}
