import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { UserRoutingModule } from './user-roting.module';
import { AllUserComponent } from './components/all-user/all-user.component';
import { UserComponent } from './components/user/user.component';



@NgModule({
  declarations: [AllUserComponent, UserComponent],
  imports: [
    CommonModule,
    UserRoutingModule,  
    HttpClientModule
  ]
})
export class UserModule { }
