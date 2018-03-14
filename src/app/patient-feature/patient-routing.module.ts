import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientMainContainerComponent } from './patient-main-container/patient-main-container.component';

const routes: Routes = [
  { 
    path: 'patient/:id', 
    component: PatientMainContainerComponent,
  },
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ],
})

export class PatientRoutingModule { }
