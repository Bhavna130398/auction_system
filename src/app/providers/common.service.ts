import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(public http: HttpClient, private router: Router) { }

  loginUser(data: any) {
    return this.http.post(environment.ApiUrl + 'users/login', data);
  }
  registerUser(data: any) {
    return this.http.post(environment.ApiUrl + 'users/register', data);
  }
  addProduct(data: any) {
    return this.http.post(environment.ApiUrl + 'product/addProduct', data);
  }
  getList(role: any): Observable<User[]> {
    return this.http.post<User[]>(environment.ApiUrl + 'admin/list', { role: role });
  }
  verifyUser(data: any) {
    return this.http.post(environment.ApiUrl + 'admin/update', data);
  }
  logout() {
    localStorage.removeItem('role');
    localStorage.removeItem('key');
    this.router.navigate(['/login']);
  }
}
