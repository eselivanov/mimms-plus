import { NgModule } from '@angular/core';
import { MatButtonModule, MatToolbarModule, MatIconModule, MatInputModule, MatFormFieldModule, MatTableModule, MatStepperModule, MatCardModule, MatListModule} from '@angular/material';

@NgModule({
  imports: [MatButtonModule, MatToolbarModule, MatIconModule, MatInputModule, MatFormFieldModule, MatTableModule, MatStepperModule, MatCardModule, MatListModule],
  exports: [MatButtonModule, MatToolbarModule, MatIconModule, MatInputModule, MatFormFieldModule, MatTableModule, MatStepperModule, MatCardModule, MatListModule],
})

export class AngularMaterialModules { }