import { Injectable } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserService } from '../services/user.service';


@Injectable()


export class AuthGuard {

  constructor(
    private userService: UserService,
    private router: Router
  ) { };

  canActivate(): boolean {
    if (!this.userService.isAuthenticated) {
      this.router.navigate(['/login']);
    };
    return this.userService.isAuthenticated
  };

  canActivateChild(): boolean {
    return this.canActivate();
  };

};


// export const authGuard: CanActivateFn = (route, state) => {
//   return true;
// };
