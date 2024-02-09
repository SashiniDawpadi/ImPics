import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  signUpForm: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.signUpForm = this.formBuilder.group({
      fName: new FormControl([Validators.required, Validators.maxLength(20)]),
      lName: new FormControl([Validators.required, Validators.maxLength(20)]),
      email: new FormControl([Validators.required, Validators.maxLength(50)]),
      phoneNumber: new FormControl([Validators.required, Validators.maxLength(10)]),
      password: new FormControl([Validators.required, Validators.minLength(8), Validators.maxLength(50)]),
    });
  }
}
