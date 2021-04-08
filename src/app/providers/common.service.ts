import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(public http: HttpClient, private router: Router) { }

  loginUser(data: any) {
    return this.http.post(environment.ApiUrl + 'login', data);
  }

  registerUser(data: any) {
    return this.http.post(environment.ApiUrl + 'register', data);
  }
  addProduct(data: any) {
    return this.http.post(environment.ApiUrl + 'add-product', data);
  }
  logout() {
    localStorage.removeItem('role');
    localStorage.removeItem('key');
    this.router.navigate(['/login']);
  }
}
