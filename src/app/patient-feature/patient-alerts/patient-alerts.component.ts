import { Component, OnInit } from '@angular/core';

import {MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-patient-alerts',
  templateUrl: './patient-alerts.component.html',
  styleUrls: ['./patient-alerts.component.css']
})
export class PatientAlertsComponent implements OnInit {

  warningsDisplayedColumns = ['message', 'effectiveFrom', 'modalAction'];
  exemptionsDisplayedColumns = ['disease', 'reason', 'effectiveFrom', 'modalAction'];
  deferralsDisplayedColumns = ['immAgent', 'reason', 'effectiveFrom', 'effectiveTo', 'modalAction'];
  contraindicationsDisplayedColumns = ['antigen', 'reason', 'effectiveFrom', 'modalAction'];
  precautionsDisplayedColumns= ['antigen', 'reason', 'effectiveFrom', 'modalAction'];
  
  warningsDataSource = new MatTableDataSource(WARNING_DATA);
  exemptionsDataSource = new MatTableDataSource(EXEMPTION_DATA);
  deferralsDataSource = new MatTableDataSource(DEFERRAL_DATA);
  contraindicationsDataSource = new MatTableDataSource(CONTRAINDICATION_DATA);
  precautionsDataSource = new MatTableDataSource(PRECAUTION_DATA);

  constructor() { }

  ngOnInit() {
    
  }

}

export interface Warning {
  message: string;
  effectiveFrom: string;
  recordedBy: string;
}

export interface Exemption {
  disease: string;
  reason: string;
  effectiveFrom: string;
  effectiveTo: string;
  sourceOfEvidence: string;
  comment: string;
  recordedBy: string;
}

export interface Deferral {
  immAgent: string;
  reason: string;
  effectiveFrom: string;
  effectiveTo: string;
  recordedBy: string;
}

export interface Contraindication {
  antigen: string;
  reason: string;
  effectiveFrom: string;
  effectiveTo: string;
  sourceOfEvidence: string;
  comment: string;
  recordedBy: string;
}

export interface Precaution {
  antigen: string;
  reason: string;
  effectiveFrom: string;
  effectiveTo: string;
  sourceOfEvidence: string;
  comment: string;
  recordedBy: string;
}

const WARNING_DATA: Warning[] = [
  {message: 'Hey you watch out!', effectiveFrom:'2017 Dec 11', recordedBy: 'Nikulina, Mila \n PHD PHO OGPMSS; Grey Bruce Health Unit'},
];

const EXEMPTION_DATA: Exemption[] = [
  {disease: 'Measles', reason: 'Client is sick', effectiveFrom: '2017 Dec 11', effectiveTo: '', sourceOfEvidence: 'Medical Exemption Form', comment: 'see clinical notes', recordedBy: 'Nikulina, Mila \n PHD PHO OGPMSS; Grey Bruce Health Unit'}
];

const DEFERRAL_DATA: Deferral[] = [
  {immAgent: 'HA', reason: 'Cool vaccine', effectiveFrom: '2017 Dec 20', effectiveTo: '2018 Jan 05', recordedBy: 'Nikulina, Mila \n PHD PHO OGPMSS; Grey Bruce Health Unit'}
];

const CONTRAINDICATION_DATA: Contraindication[] = [
  {antigen: 'HB', reason: 'Client has allergies', effectiveFrom: '2017 Dec 10', effectiveTo: '2018 Jan 25', sourceOfEvidence: 'Medical Exemption Form', comment: 'see clinical notes', recordedBy: 'Nikulina, Mila \n PHD PHO OGPMSS; Grey Bruce Health Unit'}
];

const PRECAUTION_DATA: Precaution[] = [
  {antigen: 'MMR', reason: 'Client maybe sick do not apply.', effectiveFrom: '2017 Dec 29', effectiveTo: '', sourceOfEvidence: 'Medical Exemption Form', comment: 'see clinical notes', recordedBy: 'Nikulina, Mila \n PHD PHO OGPMSS; Grey Bruce Health Unit'}
];

