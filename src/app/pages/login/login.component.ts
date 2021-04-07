import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/providers/common.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  fgLogin: FormGroup; showError: string = '';
  constructor(private fb: FormBuilder, private cs: CommonService, private router: Router) {
    this.fgLogin = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {
  }

  submit() {
    this.cs.loginUser(this.fgLogin.value).subscribe((res: any) => {
      if (res.length != 0) {
        if (res.role == 'auctionar') {
          this.router.navigate(['/user/auctioner']);
        } else if (res.role == 'bidder') {
          this.router.navigateByUrl('/user/biddar');
        } else {
          this.router.navigateByUrl('/admin');
        }
        localStorage.setItem('key', res._id);
        localStorage.setItem('role', res.role);
      } else {
        this.showError = 'Login Failed!';
      }
    })
    // if (this.fgLogin.value.userName === 'admin' && this.fgLogin.value.password === 'admin') {
    //   this.router.navigateByUrl('/admin-dashboard');
    // }
  }


}
