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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//routers
import { AppRoutingModule } from './app-routing.module';

//Dialogs
import { UserDialogComponent } from './dialogs/user-dialog/user-dialog.component';
import { RemoteClinicsComponent } from './dialogs/remote-clinics/remote-clinics.component';
import { AddTypesDialogComponent } from './dialogs/add-types-dialog/add-types-dialog.component';
import { AddPatientDialogComponent } from './dialogs/add-patient-dialog/add-patient-dialog.component';
import { CreateNoteDialogComponent } from './dialogs/create-note-dialog/create-note-dialog.component';
import { CreateConsentDialogComponent } from './dialogs/create-consent-dialog/create-consent-dialog.component';
import { CreateNewImmDialogComponent } from './dialogs/create-new-imm-dialog/create-new-imm-dialog.component';
import { CreateNewHistoricalImmDialogComponent } from './dialogs/create-new-historical-imm-dialog/create-new-historical-imm-dialog.component'

//Components
import { SearchPatientComponent } from './clinic-feature/search-patient/search-patient.component';
import { CreatePatientComponent } from './clinic-feature/create-patient/create-patient.component';
import { CreateNewNoteComponent } from './patient-feature/create-new-note/create-new-note.component';
import { CreateNewConsentComponent } from './patient-feature/create-new-consent/create-new-consent.component';
import { CreateNewImmComponent } from './patient-feature/create-new-imm/create-new-imm.component';


//Custom Components

import { MyTelInput, MyTel } from './supporting_components/MyTelInput';


@NgModule({
  declarations: [
    AppComponent,
    UserDialogComponent,
    RemoteClinicsComponent,
    AddTypesDialogComponent,
    AddPatientDialogComponent,
    CreateNoteDialogComponent,
    CreateConsentDialogComponent,
    CreateNewImmDialogComponent,
    CreateNewHistoricalImmDialogComponent,
    SearchPatientComponent,
    CreatePatientComponent,
    CreateNewNoteComponent,
    CreateNewConsentComponent,
    CreateNewImmComponent,
    MyTelInput,
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
    FormsModule, 
    ReactiveFormsModule
  ],
  entryComponents: [
    UserDialogComponent,
    RemoteClinicsComponent,
    AddTypesDialogComponent,
    AddPatientDialogComponent,
    CreateNoteDialogComponent,
    CreateConsentDialogComponent,
    CreateNewImmDialogComponent,
    CreateNewHistoricalImmDialogComponent,
    MyTelInput
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
