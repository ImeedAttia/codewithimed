import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatButtonModule} from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from 'src/material.module';
import { RegisterComponent } from './components/user/register/register.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { LoginComponent } from './components/user/login/login.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ErrorStateMatcher, ShowOnDirtyErrorStateMatcher } from '@angular/material/core';
import { DataService } from './Services/data.service';
import { UserService } from './Services/user.service';
import { HttpClientModule } from '@angular/common/http';
import { MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material/snack-bar';
import { authInterceptorProviders } from './interceptors/auth-interceptor.interceptor';
import { ProfileComponent } from './components/user/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    NavBarComponent,
    LoginComponent,
    HomepageComponent,
    ProfileComponent
  ],
  imports: [
  BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule


  ],
  providers: [
              authInterceptorProviders,
              DataService,
              UserService,
              {provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: {duration: 3500}},
              {provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher}
            ],
  bootstrap: [AppComponent]
})
export class AppModule { }
