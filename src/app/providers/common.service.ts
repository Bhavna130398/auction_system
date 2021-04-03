import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(public http: HttpClient) { }

  loginUser(data) {
    return this.http.post(environment.ApiUrl + 'login', data)
  }
  registerUser(data) {
    return this.http.post(environment.ApiUrl + 'registerUser', data)
  }

}
