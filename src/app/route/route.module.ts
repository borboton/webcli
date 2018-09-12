import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from '../app.component';
import { HomeComponent } from '../component/home/home.component';
import { Page1Component } from '../component/page1/page1.component';
import { Page2Component } from '../component/page2/page2.component';
import { LoginComponent } from '../component/login/login.component';

const rutas: Routes = [

 { path: 'home', component: HomeComponent },
 { path: 'page1', component: Page1Component },
 { path: 'page2', component: Page2Component },
 { path: 'login', component: LoginComponent },
 { path: '',   redirectTo: '/home', pathMatch: 'full' },
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot( rutas )
  ],
  exports: [RouterModule],
  declarations: []
})
export class RouteModule { 


}
