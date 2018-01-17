//misc.
import { NgModule } from '@angular/core';
import { environment } from '../../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModules } from '../app.angularmodules'
import { ServiceWorkerModule } from '@angular/service-worker';
import { BrowserModule } from '@angular/platform-browser';

//routers
import { PatientRoutingModule } from './patient-routing.module';

//Components
import { PatientMainContainerComponent } from './patient-main-container/patient-main-container.component';
import { PatientDemographicsComponent } from './patient-demographics/patient-demographics.component';
import { PatientAlertsComponent } from './patient-alerts/patient-alerts.component';
import { PatientImmunizationsComponent } from './patient-immunizations/patient-immunizations.component';
import { PatientNotesComponent } from './patient-notes/patient-notes.component';

@NgModule({
  declarations: [
    PatientMainContainerComponent,
    PatientDemographicsComponent,
    PatientAlertsComponent,
    PatientImmunizationsComponent,
    PatientNotesComponent,
  ],
  imports: [
    PatientRoutingModule,
    BrowserModule,
    environment.production ? ServiceWorkerModule.register('/ngsw-worker.js') : [],
    BrowserAnimationsModule,
    AngularMaterialModules,
  ],
  providers: [],
})
export class PatientModule { }
