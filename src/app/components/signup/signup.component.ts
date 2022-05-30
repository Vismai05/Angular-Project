import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/logins/login.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private fb:FormBuilder, private router:Router, private login:LoginService) { }

  ngOnInit(): void {
  }

  details:any = new FormGroup({
    name : new FormControl ('Name',Validators.required),
    email : new FormControl ('Email',Validators.required),
    pswd : new FormControl (null,Validators.required),
    checkpass : new FormControl (null,Validators.required),
    terms : new FormControl (false,Validators.required)
  })

  LoginNow(){
    if ((this.details.controls.pswd.value==this.details.controls.checkpass.value)&&(this.details.controls.terms.value==true)){
      this.login.update(this.details.value);
      this.router.navigate(['/login']);
    }
    else if (this.details.controls.pswd.value!=this.details.controls.checkpass.value){
      alert('Passwords Entered does not match');
    }
    else if (this.details.controls.terms.value==false){
      alert('Please agree the Terms of service');
    }
  }

}
