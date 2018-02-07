//misc.
import { NgModule } from '@angular/core';
import { environment } from '../../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModules } from '../app.angularmodules'

import { BrowserModule } from '@angular/platform-browser';

import { AppModule } from '../app.module'

//routers
import { PatientRoutingModule } from './patient-routing.module';

//Components
import { PatientMainContainerComponent } from './patient-main-container/patient-main-container.component';
import { PatientDemographicsComponent } from './patient-demographics/patient-demographics.component';
import { PatientAlertsComponent } from './patient-alerts/patient-alerts.component';
import { PatientImmunizationsComponent } from './patient-immunizations/patient-immunizations.component';
import { PatientNotesComponent } from './patient-notes/patient-notes.component';
import { PatientConsentsComponent } from './patient-consents/patient-consents.component';
import { PatientAdministerImmComponent } from './patient-administer-imm/patient-administer-imm.component';

@NgModule({
  declarations: [
    PatientMainContainerComponent,
    PatientDemographicsComponent,
    PatientAlertsComponent,
    PatientImmunizationsComponent,
    PatientNotesComponent,
    PatientConsentsComponent,
    PatientAdministerImmComponent,
  ],
  imports: [
    PatientRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    AngularMaterialModules,
  ],
  providers: [],
})
export class PatientModule { }
