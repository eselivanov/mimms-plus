//misc.
import { NgModule } from '@angular/core';
import { environment } from '../../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModules } from '../app.angularmodules'
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


//routers
import { ClinicRoutingModule } from './clinic-routing.module';

//Components
import { ClinicListComponent } from './clinic-list/clinic-list.component';
import { ClientListComponent } from './client-list/client-list.component';
import { MainContainerComponent } from './main-container/main-container.component';

import { AppModule } from '../app.module'

import { Navigation } from 'selenium-webdriver';
import { ClinicDashboardComponent } from './clinic-dashboard/clinic-dashboard.component';
import { ClinicDetailsComponent } from './clinic-details/clinic-details.component';


@NgModule({
  declarations: [
    MainContainerComponent,
    ClinicListComponent,
    ClientListComponent,
    ClinicDashboardComponent,
    ClinicDetailsComponent,
  ],
  imports: [
    ClinicRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    AngularMaterialModules,
    FormsModule
  ],
  providers: [],
})
export class ClinicModule { }
