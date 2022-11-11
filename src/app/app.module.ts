import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AppService } from './app.service';
import { RegisterComponent } from './register/register.component';
import { HomComponent } from './hom/hom.component';
import { AppRoutingModule } from './app-routing.module';
import { ChildComponent } from './child/child.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule,ReactiveFormsModule,AppRoutingModule],
  declarations: [ AppComponent, HelloComponent, RegisterComponent, HomComponent, ChildComponent],
  bootstrap:    [ AppComponent ],
  providers:    [  AppService]
})
export class AppModule { }
