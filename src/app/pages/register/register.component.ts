import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/providers/common.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  fgRegister: FormGroup; hide = true;
  constructor(private fb: FormBuilder, private cs: CommonService, private router: Router) {
    this.fgRegister = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      gender: ['', Validators.required],
      DOB: ['', Validators.required],
      mobileNumber: ['', [Validators.required, Validators.maxLength(10), Validators.minLength(10)]],
      address: ['', Validators.required],
      isVerified: ['false'],
      role: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],
      bidcoin: [250]
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.cs.registerUser(this.fgRegister.value).subscribe((res: any) => {
      if (res) {
        this.router.navigateByUrl('/login');
        this.fgRegister.reset();
      } else {
        console.log('error');
      }
    });
  }
}
