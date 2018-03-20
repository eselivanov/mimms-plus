import { Component, OnInit, ViewChild } from '@angular/core';

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
import { PatientService } from '../services/patient.service';
import { RemoteClinicListService } from '../../clinic-feature/services/remote-clinic-list.service';
import { Patient } from '../../models/patient';
import { PatientDemographicsComponent } from '../patient-demographics/patient-demographics.component';
@Component({
  selector: 'app-patient-main-container',
  templateUrl: './patient-main-container.component.html',
  styleUrls: ['./patient-main-container.component.css', '../../styles/main-container-shared.css']
})
export class PatientMainContainerComponent implements OnInit {

  @ViewChild(PatientDemographicsComponent)
  private patientDemographicsComponent: PatientDemographicsComponent; 

  selectedIndex:Number = 0
  patient: Patient
  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public titleService: Title,
    public dialog: MatDialog,
    public patientService: PatientService,
    public clinicService: RemoteClinicListService,
  ) { }

  ngOnInit() {
    if (!this.clinicService.clinicDetails) {
      this.router.navigate(['/clinics']);
    }else {
      let patientId = this.route.snapshot.paramMap.get('id')
      this.patientService.getPatientDemographics(patientId).subscribe(
        data => {

          this.patient = new Patient().deserialize(data)
          this.patientService.selectedPatient = this.patient

          this.titleService.setTitle(`${this.patient.getFamilyName()}, ${this.patient.getGivenName()}`);
          this.patientDemographicsComponent.setPatient(this.patient)

        },
        error => {
        }
      )
     
    }
    
  }

  setHeaderTitle = (id) => {
    
    var selectedPatient = null;
    for (var patient of this.patientService.patients) {
      if (this.patient.getClientId() === id){
        selectedPatient = patient;
        break;
      }
    }
    if (selectedPatient) {
      
    }else {
      this.titleService.setTitle("Unkown Patient");
    }
    
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
          data: {options:['Deferral', 'Client Warning', 'Exemption', 'Contraindication', 'Precaution'], title:'Alert'}
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
          data: {options:['Clinical Note', 'Communication Event Log'], title:'Note'}
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

/*export interface Patient {
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
];*/
