import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { AllPostComponent } from './components/all-post/all-post.component';
import { PostComponent } from './components/post/post.component';
import { PostsResolveService } from './services';
import { PostResolveService } from './services';

const routes: Routes = [
    {
        path: '',
        resolve: { allPosts: PostsResolveService },
        component: AllPostComponent,
    },
    {
        path: 'post/:id',
        resolve: { postData: PostResolveService },
        component: PostComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class PostRoutingModule { }