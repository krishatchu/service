import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms'
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

    parentData="This leads to you to Child Component";


  registerForm=new FormGroup({
    name: new FormControl('',Validators.required),
    dob:  new FormControl('',Validators.required),
    email :  new FormControl('',Validators.required),
    mobile:  new FormControl('',Validators.required)

  })
  get name(){
    return this.registerForm.get('name')
  }
  get dob(){
    return this.registerForm.get('dob')
  }
  get email(){
    return this.registerForm.get('email')
  }
  get mobile(){
    return this.registerForm.get('mobile')
  }
  ngOnInit() {
  }
  ok(){
    console.log(this.registerForm.value)
  }
  
}