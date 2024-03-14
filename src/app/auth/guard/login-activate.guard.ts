import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {AuthenticationService} from "../service/authentication.service";

export const loginActivateGuard: CanActivateFn = (route, state) => {
  return inject(AuthenticationService).isLoggedIn()
    ? true
    : inject(Router).createUrlTree(['login']);
};
