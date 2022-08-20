import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { LoginComponent } from './components/user/login/login.component';
import { RegisterComponent } from './components/user/register/register.component';
import { AuthGuardGuard } from './GUARDS/auth-guard.guard';
import { SecureInnerPagesGuard } from './GUARDS/secure-innerpages.guard';
import { ProfileComponent } from './components/user/profile/profile.component';

const routes: Routes = [


      {
        path:'login', component: LoginComponent, canActivate: [SecureInnerPagesGuard]
      },
      {
        path:'profile', component: ProfileComponent
      },
      {
        path:'register', component: RegisterComponent, canActivate: [SecureInnerPagesGuard]
      },
      {
        path:'home', component: HomepageComponent, canActivate: [AuthGuardGuard]
      }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],


exports: [RouterModule]
})
export class AppRoutingModule { }
