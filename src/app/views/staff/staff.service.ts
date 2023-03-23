import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class StaffService {
  private Url = "/api/";
  private apiurl = this.Url + 'hotel/';
  private adminurl = this.Url + 'admin/';
  private USERnurl = this.Url + 'user/';
  private staffurl = this.Url + 'staff/';
  private hotelurl = this.Url + 'hotel/';
  private roomurl = this.Url + 'room/';


  constructor(private http: HttpClient) { }

  getAllHotels(): Observable<any> {
    return this.http.get(this.apiurl + 'view');
  }
  createhotels(body: any): Observable<any> {
    return this.http.post(this.staffurl + 'createstaff', body, {
      observe: 'body',
    });
  }
  viewhotels(id: any) {
    return this.http.get(this.hotelurl + 'view/' + id)
  }
  createroom(body: any, imageFile?: any): Observable<any> {
    //body['roomImage']=imageFile;
    var formData = new FormData();
    formData.append('max_guests',body.max_guests);
    formData.append('price',body.price);
    formData.append('hotel',body.hotel);
    formData.append('roomImage',imageFile);

    console.log("image",formData);
    return this.http.post(this.roomurl + 'create_room', formData, {
      observe: 'body',
    });
  }

  updatehotel(id: any,body:any){
    return this.http.put(this.hotelurl+'update/'+id,body,{
      observe: 'body',
    });
  }

  deletehotel(id:any){
    return this.http.delete(this.hotelurl + 'delete/'+ id)
  }
}
