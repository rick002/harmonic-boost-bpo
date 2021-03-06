import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../landing/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class NonAuthGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }
  
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    console.log('Is LoggedIn: ', this.authService.isLoggedIn());
    if (this.authService.isLoggedIn()) {
      this.router.navigate(['/careers']);
      return false;
    }
    return true;
  }
  
}
