import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../landing/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}

  private isApplications = (route: ActivatedRouteSnapshot): boolean => route.url[0].path === 'applications'  

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean  {
    const isLoggedIn: boolean = this.authService.isLoggedIn();
    if (isLoggedIn && (this.authService.isAdmin() || this.isApplications(route))) {
      return isLoggedIn;
    }
    this.router.navigate(['/']);
    return isLoggedIn;
  }
  
}
