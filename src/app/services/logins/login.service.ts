import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  users = [
    {'email':'user1','pswd':'1234'},
    {'email':'user2','pswd':'12345'},
    {'email':'user3','pswd':'123456'}
  ]

  update(val:any){
    this.users.push(val);
  }

  bool:any = [];
  login(mail:any,pwd:any){
    let flag=0
    for (let i = 0; i < this.users.length; i++) {
      if ((this.users[i].email==mail)&&(this.users[i].pswd==pwd)){
        flag++;
        this.bool.push(true);
        return mail; 
      }
    }
    if (flag==0){
      alert('Invalid Id or Password');
    }
  }

  loggedin(){
    if (this.bool[0]==true){
      return true;
    }
    else{
      return false;
    }
  }


}
