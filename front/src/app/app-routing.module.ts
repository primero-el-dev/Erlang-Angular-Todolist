import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginPageComponent } from './login-page/login-page.component';
import { RegistrationPageComponent } from './registration-page/registration-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { IsLoggedGuard } from './is-logged.guard';
import { IsAnonymousGuard } from './is-anonymous.guard';

const routes: Routes = [
  { path: '', component: HomePageComponent, canActivate: [IsLoggedGuard] },
  { path: 'login', component: LoginPageComponent, canActivate: [IsAnonymousGuard] },
  { path: 'registration', component: RegistrationPageComponent, canActivate: [IsAnonymousGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
