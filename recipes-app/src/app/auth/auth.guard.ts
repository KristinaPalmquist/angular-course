import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";
import { map, take } from "rxjs/operators";

@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    router: RouterStateSnapshot
  ):
    | boolean
    | Promise<boolean | UrlTree>
    | Observable<boolean | UrlTree>
    | UrlTree {
    return this.authService.user.pipe(
      // only check once and then unsubscribe
      take(1),
      map(user => {
        // return !!user;
        const isAuth = !!user;
        if (isAuth) {
          return true;
        }
        return this.router.createUrlTree(['/auth']);
      }),
      // tap(isAuth => {
      //   if (!isAuth) {
      //     this.router.navigate(['/auth'])
      //   }
      // })
    );
  }
}
