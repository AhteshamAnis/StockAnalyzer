import { Component } from '@angular/core';
import { FormControl,FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {
  form = new FormGroup({
  name :new FormControl('',Validators.required),
  password : new FormControl('')
  })

  onSubmit(){
    console.log(this.form);
    if(this.form.value.name == "Ahtesham" && this.form.value.password == "Stocker"){
          console.log("Login Successful");
    }else{
      console.log("Invalid Password");
    }
  }
}
