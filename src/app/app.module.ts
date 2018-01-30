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


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('/ngsw-worker.js', {enabled: environment.production}),
    BrowserAnimationsModule,
    AngularMaterialModules,
    AppRoutingModule,
    ClinicModule,
    PatientModule, 
    AuthenticationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
