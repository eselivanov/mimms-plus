import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainContainerComponent } from './main-container/main-container.component';
import { ClinicListComponent } from './clinic-list/clinic-list.component';
import { ClientListComponent } from './client-list/client-list.component';
import { ClinicDetailsComponent } from './clinic-details/clinic-details.component';
import { ClinicDashboardComponent } from './clinic-dashboard/clinic-dashboard.component';

const routes: Routes = [
  { 
    path: 'clinics', 
    component: MainContainerComponent,
    children: [
      {
        path: ':id/dashboard',
        component: ClinicDashboardComponent
      },
      {
        path: ':id/details',
        component: ClinicDetailsComponent
      },
      {
        path: ':id',
        component: ClientListComponent
      },
      {
        path: '',
        component: ClinicListComponent
      }
    ]
  },
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forChild(routes) ],
})

export class ClinicRoutingModule { }
