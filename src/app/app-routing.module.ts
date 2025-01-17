import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './items/home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    {path:"items/home", component:HomeComponent},
    {path:"items", redirectTo:"items/home",pathMatch:"full"},
    {path:"login", component: LoginComponent},
    {path:"", redirectTo:"login",pathMatch:"full"},
    {path:"register", component: RegisterComponent},
    {path:"profile", component: ProfileComponent},
    {path:"user", component: BoardUserComponent},
    {path:"admin", component: BoardAdminComponent},
    {path:"mode", component: BoardModeratorComponent},
    {path:"", redirectTo:"items/home",pathMatch:"full"}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
