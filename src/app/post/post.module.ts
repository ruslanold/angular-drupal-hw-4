import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './components/post/post.component';
import { AllPostComponent } from './components/all-post/all-post.component';
import { HttpClientModule } from '@angular/common/http';
import { PostRoutingModule } from './post-routing.module';



@NgModule({
  declarations: [PostComponent, AllPostComponent],
  imports: [
    CommonModule,
    PostRoutingModule,
    HttpClientModule
  ],
})
export class PostModule { }
