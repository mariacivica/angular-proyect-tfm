import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './auth/login-form/login-form.component';
import { HomeComponent } from './auth/home/home.component';
import { RegisterFormComponent } from './auth/register-form/register-form.component';

const routes: Routes = [
  {path: 'inicio-sesion', component: LoginFormComponent},
  {path: 'home', component:HomeComponent},
  {path: 'registro', component: RegisterFormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
