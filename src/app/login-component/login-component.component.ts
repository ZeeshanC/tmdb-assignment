import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {
  // email = '';
  // password = '';
  loading: boolean = false;
  signUpForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.pattern("^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,5}$")]),
    password: new FormControl('', [Validators.required, Validators.pattern('^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$')])
  })

  get email() {
    console.log(this.signUpForm.get('email')?.value)
    return this.signUpForm.get('email');
  }

  get password() {
    return this.signUpForm.get('password');
  }

  onSubmit() {
    const email = this.signUpForm.get('email')?.value || '';
    const password = this.signUpForm.get('password')?.value || '';
    let pass = sessionStorage.getItem(email);
    sessionStorage.setItem('userdata', JSON.stringify({ email: password }));
    if(pass == password){
      this.router.navigate(['/homepage'])
    }
    else{
      alert("Email id or password doesnot match")
    }
  }

  constructor(
    private router: Router
  ) {
  }

  ngOnInit(): void {
  }

}
