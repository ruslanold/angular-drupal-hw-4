import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './components/post/post.component';
import { AllPostComponent } from './components/all-post/all-post.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [PostComponent, AllPostComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class PostModule { }
