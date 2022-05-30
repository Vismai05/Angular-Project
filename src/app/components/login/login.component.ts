import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from 'src/app/services/logins/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb:FormBuilder, private lgn:LoginService, private ar:ActivatedRoute, private rout:Router) { }

  ngOnInit(): void {
    console.log(this.lgn.bool);
  }
  new1:any

  loginform:any = this.fb.group({
    name : this.fb.control(null,Validators.required),
    pwd : this.fb.control(null,Validators.required) 
  })

  display = ''
  login(){
    let uname = this.loginform.controls.name.value;
    let pswd = this.loginform.controls.pwd.value;
    this.display=this.lgn.login(uname,pswd);
    if (this.lgn.loggedin()==true){
      this.rout.navigate(['/admin']);
    }
  }

}
