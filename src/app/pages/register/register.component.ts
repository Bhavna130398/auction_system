import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonService } from 'src/app/providers/common.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  fgRegister: FormGroup;
  constructor(private fb: FormBuilder, private cs: CommonService) {
    this.fgRegister = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      gender: ['', Validators.required],
      DOB: ['', Validators.required],
      mobileNumber: ['', Validators.required],
      address: ['', Validators.required],
      isVerified: [''],
      role: ['', Validators.required],
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.fgRegister.value);
  }
}
