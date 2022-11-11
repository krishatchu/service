import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-hom',
  templateUrl: './hom.component.html',
  styleUrls: ['./hom.component.css']
})
export class HomComponent implements OnInit {
  person = 'AtchuKrish';
  nam="";

    constructor(public appServe : AppService,private route:Router){
      this.nam=this.appServe.name;
        }
  ngOnInit() {
  }

  okForm= new FormGroup({
    id:new FormControl('',[Validators.required,Validators.maxLength(4-12)]),

    pwd:new FormControl('',[Validators.required,Validators.pattern('[A-Za-z]+$')])
})
get id(){
  return this.okForm.get('id')
}
get pwd(){
  return this.okForm.get('pwd')
}
onSubmit(){
  this.route.navigate(['register'])
}
setClr(){
  this.okForm.reset()
}
}


