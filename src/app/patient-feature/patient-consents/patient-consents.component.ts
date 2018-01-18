import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-patient-consents',
  templateUrl: './patient-consents.component.html',
  styleUrls: ['./patient-consents.component.css']
})
export class PatientConsentsComponent implements OnInit {

  serviceDisplayedRows = ['antigen', 'consent', 'recordedBy', 'effectiveTo','modalAction']
  disclosureDisplayedRows = ['consent', 'reason', 'recordedBy', 'effectiveFrom', 'modalAction']
  
  serviceDataSource = new MatTableDataSource(CONSENT_SERVICE_DATA);
  disclosureDataSource = new MatTableDataSource(CONSENT_DISCLOSURE_DATA);

  constructor() { }

  ngOnInit() {
  }


}

export interface Consent {
  antigen: string;
  consentStatus: string;
  reason: string;
  comments: string;
  effectiveFrom: string;
  effectiveTo: string;
  consentGivenBy: string;
  formOfConsent: string;
  consentGivenTo: string;
  recordedBy: string;
}



const CONSENT_SERVICE_DATA: Consent[] = [
  {antigen: 'Hepatitis A (HA)', consentStatus: 'Granted', reason: '', comments: 'Some comment.', effectiveFrom: '2017 Nov 14', effectiveTo: '2018 Jan 05', consentGivenBy: 'Customary Care Parent', formOfConsent: 'Verbal', consentGivenTo: 'Nikulina, Mila - Grey Bruce Health Unit', recordedBy: 'Nikulina\nPHD PHO OGPMSS; Grey Bruce Health Unit'},
  {antigen: 'Hepatitis B (HB)', consentStatus: 'Refused', reason: '', comments: 'Some comment.', effectiveFrom: '2017 Nov 14', effectiveTo: '2018 Jan 05', consentGivenBy: 'Customary Care Parent', formOfConsent: 'Verbal', consentGivenTo: 'Nikulina, Mila - Grey Bruce Health Unit', recordedBy: 'Nikulina\nPHD PHO OGPMSS; Grey Bruce Health Unit'},
]

const CONSENT_DISCLOSURE_DATA: Consent[] = [
  {antigen: '', consentStatus: 'Granted', reason: 'Test Reason', comments: 'Some comment.', effectiveFrom: '2017 Nov 14', effectiveTo: '2018 Jan 05', consentGivenBy: 'Customary Care Parent', formOfConsent: 'Verbal', consentGivenTo: 'Nikulina, Mila - Grey Bruce Health Unit', recordedBy: 'Nikulina\nPHD PHO OGPMSS; Grey Bruce Health Unit'},
  {antigen: '', consentStatus: 'Refused', reason: 'The obvious... DUH', comments: 'Some comment.', effectiveFrom: '2017 Nov 14', effectiveTo: '2018 Jan 05', consentGivenBy: 'Customary Care Parent', formOfConsent: 'Verbal', consentGivenTo: 'Nikulina, Mila - Grey Bruce Health Unit', recordedBy: 'Nikulina\nPHD PHO OGPMSS; Grey Bruce Health Unit'},
]