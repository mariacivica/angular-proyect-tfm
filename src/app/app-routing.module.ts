import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './auth/login-form/login-form.component';
import { HomeComponent } from './auth/home/home.component';
import { RegisterFormComponent } from './auth/register-form/register-form.component';
import { ResourcesPageComponent } from './resources/resources-page/resources-page.component'

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'inicio-sesion', component: LoginFormComponent },
  { path: 'home', component:HomeComponent },
  { path: 'registro', component: RegisterFormComponent },
  { path: 'recursos', component: ResourcesPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
