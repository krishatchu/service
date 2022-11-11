import { Injectable } from '@angular/core';

@Injectable()
export class AppService {

  name="Service in angular Welcomes "
  age=23;
  click(){
  console.log(this.age);
  }

  constructor() { }

}