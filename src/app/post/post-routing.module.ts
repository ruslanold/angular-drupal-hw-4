import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { AllPostComponent } from './components/all-post/all-post.component';
import { PostComponent } from './components/post/post.component';

const routes: Routes = [
    {
        path: '',
        component: AllPostComponent,
        children: [
            { path: '/:id', component: PostComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class PostRoutingModule { }