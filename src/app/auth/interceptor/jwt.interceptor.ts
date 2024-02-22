import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor() {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem("jwt"); // you probably want to store it in localStorage or something

    let req1 = req.clone({
      headers: req.headers.append('Access-Control-Allow-Origin', `*`),
    });

    if (!token) {
      return next.handle(req);
    }

    req1 = req1.clone({
      headers: req1.headers.append('Authorization', `Bearer ${token}`),
    });
    return next.handle(req1);
  }
}
