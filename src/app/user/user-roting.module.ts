import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { AllUserComponent } from './components/all-user/all-user.component';
import { UserComponent } from './components/user/user.component';
import { UsersResolveService } from './services/users-resolve.service';

const routes: Routes = [
    { path: '', resolve: {allUsers: UsersResolveService}, component: AllUserComponent },
    { path: 'post/:id', resolve: {userData: UsersResolveService}, component: UserComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class UserRoutingModule { }