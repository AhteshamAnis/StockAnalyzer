import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './login-page/login-page.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';



@NgModule({
  declarations: [LoginPageComponent],
  imports: [
    CommonModule,FormsModule,ReactiveFormsModule,RouterModule,MatSlideToggleModule
  ],
  exports:[LoginPageComponent]
})
export class AuthModule { }
