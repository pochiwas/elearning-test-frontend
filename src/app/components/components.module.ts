import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterComponent } from './register/register.component';



@NgModule({
  declarations: [LoginComponent,DashboardComponent,RegisterComponent],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
