import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) { }
  canActivate(
    route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (localStorage.getItem('key') == null) {
      this.router.navigate(['login']);
      return false;
    } else if (localStorage.getItem('role') == 'admin') {
      return this.router.navigateByUrl('/admin/dashboard');
    } else if (localStorage.getItem('role') == 'auctionar') {
      return this.router.navigateByUrl('/user/auctioner');
    } else if (localStorage.getItem('role') == 'bidder') {
      return this.router.navigateByUrl('/user/biddar');
    } else {
      localStorage.removeItem('key');
      localStorage.removeItem('role');
      return false;
      // return this.router.parseUrl('login');
    }
  }

}
