import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {LoginResponse} from "../model/LoginResponse";
import {Router} from "@angular/router";
import {enviroment} from "../../../enviroments/enviroment";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  constructor(private http: HttpClient, private router: Router) {
  }

  public login(email: String, password: String): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(enviroment.baseUrlTest + "auth/signinadmin", {
      email: email,
      password: password
    });
  }

  public logout() {
    localStorage.removeItem("jwt");
    localStorage.removeItem("refresh");
    this.router.navigate(["login"]);
  }

  isLoggedIn(): boolean {
    return Boolean(localStorage.getItem("jwt"));
  }

  saveToken(token: LoginResponse) {
    localStorage.setItem('jwt', token.token);
    token.refreshToken ? localStorage.setItem('refresh', token.refreshToken) : null;
  }

  changePassword(changePasswordRequest) {
    return this.http.post<void>(enviroment.baseUrlTest + "auth/password", changePasswordRequest);
  }


}
