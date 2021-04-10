import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuctionerGuard implements CanActivate {
  constructor(private router: Router) { }

  canActivate() {
    if (localStorage.getItem('key') != null) {
      return true;
    } else {
      localStorage.removeItem('key');
      localStorage.removeItem('role');
      return this.router.parseUrl('login');
    }
  }

}
