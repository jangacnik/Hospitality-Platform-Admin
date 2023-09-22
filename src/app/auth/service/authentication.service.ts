import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {FormControl, ɵFormGroupRawValue, ɵGetProperty, ɵTypedOrUntyped} from "@angular/forms";
import {Observable} from "rxjs";
import {LoginResponse} from "../model/LoginResponse";
import {Route, Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient, private router: Router) { }

  public login(email: String, password: String): Observable<LoginResponse> {
    return this.http.post<LoginResponse>("http://0.0.0.0:8888/api/v1/auth/signinadmin", {email: email, password: password});
  }

  public logout() {
    localStorage.removeItem("jwt");
    this.router.navigate(["login"]);
  }
  isLoggedIn(): boolean {
   return Boolean(localStorage.getItem("jwt"));
  }

  saveToken(token: LoginResponse) {
    localStorage.setItem('jwt', token.token);
    token.refreshToken ? localStorage.setItem('refresh', token.refreshToken) : null;
  }
}
