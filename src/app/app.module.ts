//misc.
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ServiceWorkerModule } from '@angular/service-worker';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModules } from './app.angularmodules'
import { ClinicModule } from './clinic-feature/clinic.module'
import { PatientModule } from './patient-feature/patient.module';
import { AuthenticationModule } from './authentication-feature/authentication.module'
//routers
import { AppRoutingModule } from './app-routing.module';
import { UserDialogComponent } from './dialogs/user-dialog/user-dialog.component';
import { RemoteClinicsComponent } from './dialogs/remote-clinics/remote-clinics.component';
import { AddTypesDialogComponent } from './dialogs/add-types-dialog/add-types-dialog.component';
import { AddPatientDialogComponent } from './dialogs/add-patient-dialog/add-patient-dialog.component';



@NgModule({
  declarations: [
    AppComponent,
    UserDialogComponent,
    RemoteClinicsComponent,
    AddTypesDialogComponent,
    AddPatientDialogComponent,
  ],
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('/ngsw-worker.js', {enabled: environment.production}),
    BrowserAnimationsModule,
    AngularMaterialModules,
    AppRoutingModule,
    ClinicModule,
    PatientModule, 
    AuthenticationModule,
  ],
  entryComponents: [
    UserDialogComponent,
    RemoteClinicsComponent,
    AddTypesDialogComponent,
    AddPatientDialogComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
