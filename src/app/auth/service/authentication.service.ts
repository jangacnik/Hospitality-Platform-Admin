import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {FormControl, ɵFormGroupRawValue, ɵGetProperty, ɵTypedOrUntyped} from "@angular/forms";
import {Observable} from "rxjs";
import {LoginResponse} from "../model/LoginResponse";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  public login(email: String, password: String): Observable<LoginResponse> {
    return this.http.post<LoginResponse>("http://0.0.0.0:8888/api/v1/auth/signinadmin", {email: email, password: password});
  }
  isLoggedIn(): boolean {
   return Boolean(localStorage.getItem("jwt"));
  }

  saveToken(token: LoginResponse) {
    localStorage.setItem('jwt', token.token);
    token.refreshToken ? localStorage.setItem('refresh', token.refreshToken) : null;
  }
}
