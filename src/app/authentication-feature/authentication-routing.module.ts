import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainContainerComponent } from './main-container/main-container.component';
import { UserSelectComponent } from './user-select/user-select.component';
import { PinEntryComponent } from './pin-entry/pin-entry.component';
const routes: Routes = [
  { 
    path: 'login', 
    component: MainContainerComponent,
    children: [
      {
        path: 'pin',
        component: PinEntryComponent
      },
      {
        path: '',
        component: UserSelectComponent
      }
    ]
  },
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ],
})

export class AuthenticationRoutingModule { }
