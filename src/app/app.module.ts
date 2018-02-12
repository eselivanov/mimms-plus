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

//Components
import { SearchPatientComponent } from './clinic-feature/search-patient/search-patient.component';
import { CreatePatientComponent } from './clinic-feature/create-patient/create-patient.component';
import { CreateNewNoteComponent } from './patient-feature/create-new-note/create-new-note.component';
import { CreateNewConsentComponent } from './patient-feature/create-new-consent/create-new-consent.component';
import { CreateNewAgentComponent } from './clinic-feature/create-new-agent/create-new-agent.component';


//Custom Components

import { MyTelInput, MyTel } from './supporting_components/MyTelInput';
import { CreatNewAgentDialogComponent } from './dialogs/creat-new-agent-dialog/creat-new-agent-dialog.component'


@NgModule({
  declarations: [
    AppComponent,
    UserDialogComponent,
    RemoteClinicsComponent,
    AddTypesDialogComponent,
    AddPatientDialogComponent,
    CreateNoteDialogComponent,
    CreateConsentDialogComponent,
    CreatNewAgentDialogComponent,
    SearchPatientComponent,
    CreatePatientComponent,
    CreateNewNoteComponent,
    CreateNewConsentComponent,
    CreateNewAgentComponent,
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
    CreatNewAgentDialogComponent,
    MyTelInput
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
