//misc.
import { NgModule } from '@angular/core';
import { environment } from '../../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModules } from '../app.angularmodules'

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


//routers
import { AuthenticationRoutingModule } from './authentication-routing.module';

//Components
import { MainContainerComponent } from './main-container/main-container.component';
import { Navigation } from 'selenium-webdriver';
import { UserSelectComponent } from './user-select/user-select.component';

@NgModule({
  declarations: [
    MainContainerComponent,
    UserSelectComponent,
  ],
  imports: [
    AuthenticationRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    AngularMaterialModules,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
})
export class AuthenticationModule { }
