import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule,FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../shared/material.module';

@NgModule({
  declarations: [LoginComponent,DashboardComponent,RegisterComponent],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ComponentsModule { }
