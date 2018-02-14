import { Component, OnInit } from '@angular/core';

import {MatTableDataSource} from '@angular/material';
@Component({
  selector: 'app-patient-immunizations',
  templateUrl: './patient-immunizations.component.html',
  styleUrls: ['./patient-immunizations.component.css', '../../styles/table-shared.css', '../../styles/shared-styles.css']
})
export class PatientImmunizationsComponent implements OnInit {

  immHistoryDisplayedRows = ['immAgent', 'date', 'age', 'sinceLast', 'modalAction'];
  suspensionInfoDisplayedRows = ['enforcedBy', 'org', 'diseases', 'effectiveFrom', 'effectiveTo', 'rescindDate', 'modalAction'];
  forecastByAgentDisplayedRows = ['antigen', 'eligible', 'due', 'overdue', 'forecast', 'modalAction'];
  forecastByDiseaseDisplayedRows= ['disease', 'antigen', 'eligible', 'due', 'overdue', 'forecast', 'modalAction'];
  
  immHistoryDataSource = new MatTableDataSource(IMM_HISTORY_DATA);
  suspensionInfoDataSource = new MatTableDataSource(SUSPENSION_DATA);
  forecastByAgentDataSource = new MatTableDataSource(FORECAST_AGENT_DATA);
  forecastByDiseaseDataSource = new MatTableDataSource(FORECAST_AGENT_DATA);


  constructor() { }

  ngOnInit() {
  }
  
}

export interface Immunization {
  immAgent: string;
  dateAdministered: string;
  timeAdministered: string;
  age: string;
  sinceLast: string;
  lotNumber: string;
  tradeName: string;
  manufacturer: string;
  doseNumber: Number;
  doseage: Number;
  site: string;
  route: string;
  reason: string;
}

export interface Suspension {
  enforcedBy: string;
  org: string;
  diseases: string;
  effectiveFrom: string;
  effectiveTo: string;
  rescindDate: string;
}

export interface Forecast {
  disease: string;
  antigen: string;
  eligible: string;
  due:string;
  overdue: string;
  forecast: string;
}

const IMM_HISTORY_DATA: Immunization[] = [
  {immAgent: 'HB', dateAdministered: '2017 Jun 12', timeAdministered: '12:16 PM EDT', age: '8 years 9 months 29 days', sinceLast: '1 year 2 months 30 days', lotNumber: 'L009463', tradeName: 'HB Remcombivax HB MC', manufacturer: 'Merck Canada', doseNumber: 1, doseage: 1.0, site: 'Anterolateral Thigh Lt', route: 'Oral: PO', reason: 'Occupational Risk' },
  {immAgent: 'HPV', dateAdministered: '2017 Jun 12', timeAdministered: '12:16 PM EDT', age: '8 years 9 months 29 days', sinceLast: '1 year 2 months 30 days', lotNumber: 'L009463', tradeName: 'HB Remcombivax HB MC', manufacturer: 'Merck Canada', doseNumber: 1, doseage: 1.0, site: 'Anterolateral Thigh Lt', route: 'Oral: PO', reason: 'Occupational Risk' },
];

const SUSPENSION_DATA: Suspension[] = [
  {enforcedBy: 'Nikulina, Mila', org: 'Grey Bruce Health Unit', diseases: 'Hepatitis B', effectiveFrom: '2017 Dec 06', effectiveTo: '2018 Feb 15', rescindDate: '2018 Jan 11'},
  {enforcedBy: 'Nikulina, Mila', org: '', diseases: 'Hepatitis B', effectiveFrom: '2017 Dec 06', effectiveTo: '2016 May 23', rescindDate: '2017 Mar 13'},
  {enforcedBy: 'Nikulina, Mila', org: '', diseases: 'Tetanus', effectiveFrom: '2017 Dec 06', effectiveTo: '2016 May 23', rescindDate: '2017 Mar 13'}
]

const FORECAST_AGENT_DATA: Forecast[] = [
  {disease: 'Diphtheria', antigen: 'Diphtheria (d)', eligible: '2008 Sep 25', due: '2008 Oct 14', overdue: '2008 Nov 14', forecast: 'Overdue'},
  {disease: 'Hepatitis B', antigen: 'Hepatitis B (HB-regular)', eligible: '2018 Jan 10', due: '2019 Oct 14', overdue: '2019 Nov 14', forecast: 'Eligible'},
  {disease: 'Human papilloma virus infection', antigen: 'HPV-9', eligible: '2018 Mar 11', due: '2018 Nov 11', overdue: '2019 Dec 11', forecast: 'Up To Date'},
  {disease: 'Pertussis', antigen: 'pertussis (ap)', eligible: '2008 Sep 25', due: '2008 Oct 14', overdue: '2008 Nov 14', forecast: 'Overdue'},
  {disease: 'Shingles', antigen: 'Zoster (Zos)', eligible: '2018 Jan 10', due: '2019 Oct 14', overdue: '2019 Nov 14', forecast: 'Eligible'},
]

const FORECAST_DISEASE_DATA: Forecast[] = [
  {disease: 'Human papilloma virus infection', antigen: 'HPV-9', eligible: '2018 Mar 11', due: '2018 Nov 11', overdue: '2019 Dec 11', forecast: 'Up To Date'},
  {disease: 'Pertussis', antigen: 'pertussis (ap)', eligible: '2008 Sep 25', due: '2008 Oct 14', overdue: '2008 Nov 14', forecast: 'Overdue'},
  {disease: 'Shingles', antigen: 'Zoster (Zos)', eligible: '2018 Jan 10', due: '2019 Oct 14', overdue: '2019 Nov 14', forecast: 'Eligible'},
  {disease: 'Tetanus', antigen: 'Tetanus (T)', eligible: '2008 Sep 25', due: '2008 Oct 14', overdue: '2008 Nov 14', forecast: 'Overdue'},
  {disease: 'Hepatitis B', antigen: 'Hepatitis B (HB-regular)', eligible: '2018 Jan 10', due: '2019 Oct 14', overdue: '2019 Nov 14', forecast: 'Eligible'},
]