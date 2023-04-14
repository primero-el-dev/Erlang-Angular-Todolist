import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegistrationPageComponent } from './registration-page/registration-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { TodoItemFormComponent } from './todo-item-form/todo-item-form.component';
import { TodoSearchFormComponent } from './todo-search-form/todo-search-form.component';
import { DateTimeInputGroupComponent } from './date-time-input-group/date-time-input-group.component';
import { FormControlComponent } from './form-control/form-control.component';
import { SelfClosingAlertComponent } from './self-closing-alert/self-closing-alert.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    RegistrationPageComponent,
    HomePageComponent,
    TodoItemFormComponent,
    TodoSearchFormComponent,
    DateTimeInputGroupComponent,
    FormControlComponent,
    SelfClosingAlertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
