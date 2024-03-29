import { Injectable } from '@angular/core';
import {
    HttpInterceptor,
    HttpEvent,
    HttpResponse,
    HttpRequest,
    HttpHandler,
    HttpErrorResponse,
} from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class interceptor implements HttpInterceptor {
    constructor() { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (!request || !request.url) {
            return next.handle(request);
        }
        let authReq = request;
        console.log(authReq);
        let accessToken;
        let currentUser = JSON.parse(localStorage.getItem('Authorization') || '{}');
        if (Object.keys(currentUser).length !== 0)
            currentUser = currentUser.toeken;
        else{
            return next.handle(request);
        }
        if (currentUser) {
            accessToken = currentUser;
        }
        if (accessToken != null) {
            authReq = this.addTokenHeader(request, accessToken);
        }
        return next.handle(authReq);
    }

    private addTokenHeader(request: HttpRequest<any>, token: string) {
        return request.clone({
            withCredentials: true,
            setHeaders: {
                'Authorization': `${token}`,
                'Cache-Control': 'no-cache',
                'Pragma': 'no-cache',
            }
        });
    }
}