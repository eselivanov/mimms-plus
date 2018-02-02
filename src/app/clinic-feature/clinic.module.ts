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
import { UserDialogComponent } from '../dialogs/user-dialog/user-dialog.component';
import { RemoteClinicsComponent } from '../dialogs/remote-clinics/remote-clinics.component';

import { Navigation } from 'selenium-webdriver';

@NgModule({
  declarations: [
    MainContainerComponent,
    ClinicListComponent,
    ClientListComponent,
    UserDialogComponent,
    RemoteClinicsComponent
  ],
  imports: [
    ClinicRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    AngularMaterialModules,
    FormsModule
  ],
  entryComponents: [
    UserDialogComponent,
    RemoteClinicsComponent
  ],
  providers: [],
})
export class ClinicModule { }
