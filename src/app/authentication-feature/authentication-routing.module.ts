import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainContainerComponent } from './main-container/main-container.component';
import { UserSelectComponent } from './user-select/user-select.component'
const routes: Routes = [
  { 
    path: 'login', 
    component: MainContainerComponent,
    children: [
      /*{
        path: 'pin',
        component: ClientListComponent
      },*/
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
