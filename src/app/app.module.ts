import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { NavBarComponent } from './component/navbar/navbar.component';
import { Page1Component } from './component/page1/page1.component';
import { Page2Component } from './component/page2/page2.component';
import { LoginComponent } from './component/login/login.component'; 

import { UserService } from './services/user.service';
import { RouteModule } from './route/route.module';




@NgModule({
  declarations: [
    AppComponent, 
    HomeComponent,
    NavBarComponent,    
    Page1Component, 
    Page2Component,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouteModule,
    HttpClientModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent],
})
export class AppModule { }