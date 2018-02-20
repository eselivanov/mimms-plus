import { Component, OnInit } from '@angular/core';

import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatHorizontalStepper } from '@angular/material';
import { UserDialogComponent } from '../../dialogs/user-dialog/user-dialog.component';
import { CreateNoteDialogComponent } from '../../dialogs/create-note-dialog/create-note-dialog.component'
import { CreateConsentDialogComponent } from '../../dialogs/create-consent-dialog/create-consent-dialog.component';
import { CreateNewImmDialogComponent } from '../../dialogs/create-new-imm-dialog/create-new-imm-dialog.component'
import { CreateNewHistoricalImmDialogComponent } from '../../dialogs/create-new-historical-imm-dialog/create-new-historical-imm-dialog.component';
import { AddTypesDialogComponent } from '../../dialogs/add-types-dialog/add-types-dialog.component';
@Component({
  selector: 'app-patient-main-container',
  templateUrl: './patient-main-container.component.html',
  styleUrls: ['./patient-main-container.component.css', '../../styles/main-container-shared.css']
})
export class PatientMainContainerComponent implements OnInit {

  
  selectedIndex:Number = 0
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public titleService: Title,
    public dialog: MatDialog,
  ) { }

  ngOnInit() {
    let clinicId = this.route.snapshot.paramMap.get('id')
    this.setClinicName(clinicId)
  }

  setClinicName = (id) => {
    let selectedPatient = PATIENT_DATA.filter(element => element.clientId === id);
    
    this.titleService.setTitle(selectedPatient[0].name);
  }

  addButtonClicked = () => {
    console.log(this.selectedIndex)
  }
  openInfoDialog = () => {
    let dialogRef = this.dialog.open(UserDialogComponent, {
      width: '600px',
      height: '500px',
      data: { }
    });
  }

  openAddDialog = () => {
    switch (this.selectedIndex) {
      case 0:
        break;
      case 1:
        let alertOptionsDilogRef = this.dialog.open(AddTypesDialogComponent, {
          width: '20%',
          height: '420px',
          data: {options:['Deferral', 'Client Warning', 'Exemption', 'Contraindication', 'Precaution']}
        });
        break;
      case 2:
        let historicalImmDialogRef = this.dialog.open(CreateNewHistoricalImmDialogComponent, {
          width: '80%',
          height: '95%',
          data: { }
        });
        break;
      case 3:
        /*let noteDialogRef = this.dialog.open(CreateNoteDialogComponent, {
          width: '75%',
          height: '60%',
          data: { }
        });*/
        let noteAlertOptionsDialogRef = this.dialog.open(AddTypesDialogComponent, {
          width: '20%',
          height: '420px',
          data: {options:['Clinical Note', 'Communication Event Log']}
        });
        break;
      case 4:
        let consentDialogRef = this.dialog.open(CreateConsentDialogComponent, {
          width: '80%',
          height: '90%',
          data: { }
        });
        break;
      case 5:
        let immDialogDialogRef = this.dialog.open(CreateNewImmDialogComponent, {
          width: '75%',
          height: '65%',
          data: { }
        });
        break;
      default:
        break;
    }
  }

  selectionChange = (event) => {
    console.log(event.selectedIndex)
    this.selectedIndex = event.selectedIndex
  }

}

export interface Patient {
  warningIcon: string;
  disclosureIcon: string;
  rescindIcon: string;
  name: string;
  dateOfBirth: string;
  gender: string;
  clientId: string;
  service: string;
}

const PATIENT_DATA: Patient[] = [
  {warningIcon: 'warning', disclosureIcon:'info_outline', rescindIcon:'school', name: 'Test, Joelly', dateOfBirth:'1993 Dec 21', gender: 'male', clientId: '1001316543', service: 'Needed'},
  {warningIcon: 'warning', disclosureIcon:'', rescindIcon:'', name: 'Test2, Joelly1', dateOfBirth:'2000 May 21', gender: 'female', clientId: '1001099942', service: 'Needed'},
  {warningIcon: 'warning', disclosureIcon:'', rescindIcon:'school', name: 'Doe, John', dateOfBirth:'2000 May 22', gender: 'male', clientId: '100191142', service: 'Immunized'},
];
