import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllPostComponent } from './post/components/all-post/all-post.component';
import { PostsResolveService } from './post/services';

const routes: Routes = [
  {path: 'post', resolve: { allPosts: PostsResolveService }, component: AllPostComponent},
  {path: 'user', loadChildren: () => import('./user/user.module').then( v => v.UserModule )}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
