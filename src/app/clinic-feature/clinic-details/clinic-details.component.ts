import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import {MatTableDataSource} from '@angular/material';

import 'rxjs/add/operator/switchMap';
import { ParamMap } from '@angular/router/src/shared';
import { CDK_TABLE_TEMPLATE } from '@angular/cdk/table';

@Component({
  selector: 'app-clinic-details',
  templateUrl: './clinic-details.component.html',
  styleUrls: ['./clinic-details.component.css', '../../styles/shared-styles.css', '../../styles/table-shared.css', '../../styles/list-card.css']
})
export class ClinicDetailsComponent implements OnInit {
  clinicId: string;
  clinic: Clinic;

  immDisplayedRows = ['immAgent', 'lotNumber', 'tradeName', 'dosage', 'route', 'reason', 'required'];
  immDataSource = new MatTableDataSource(IMM_DATA);

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private titleService: Title,
  ) { }

  ngOnInit() {
    this.clinicId = this.route.snapshot.paramMap.get('id')
    this.setClinicInContext(this.clinicId)
  }

  setClinicInContext = (id) => {
    let selectedClinic = CLINIC_DATA.filter(element => element.id === id);
    
    this.clinic = selectedClinic[0]
  }

}

export interface Clinic {
  id: string;
  name: string;
  dates: string;
  clients: number;
  downloaded: string;
  status: string;
  location: string;
  address: string;
  type: string;
  createdBy: string
}

const CLINIC_DATA: Clinic[] = [
  {id: '249291', name: 'DC-Test Clinic 1', dates:'2017 Dec 21', clients: 38, downloaded: '2018 Jan 19', status: 'warning', location: 'Grey Bruce Main Office', address: '101 17th Street East', type: 'Routine', createdBy: 'Joe Smith' },
  {id: '222141', name: 'DC-Test Clinic 2', dates:'2017 May 12', clients: 38, downloaded: '2018 Jan 18', status: 'warning', location: 'Peel Main Office', address: '1 Hurontario Street North', type: 'Routine', createdBy: 'Joe Smith'},
  {id: '249441', name: 'DC-Test Clinic 3', dates:'2017 Dec 13', clients: 38, downloaded: '2018 Jan 17', status: 'warning', location: 'Grey Bruce Main Office', address: '101 17th Street East', type: 'Routine', createdBy: 'Bob Dale'},
  {id: '223412', name: 'DC-Test Clinic 4', dates:'2017 Feb 18', clients: 38, downloaded: '2018 Jan 19', status: 'warning', location: 'Peel Main Office', address: '2 Hurontario Street North', type: 'Routine', createdBy: 'Bobby Jean'},
];


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
  required: number;
}

const IMM_DATA: Immunization[] = [
  {immAgent: 'HB', dateAdministered: '2017 Jun 12', timeAdministered: '12:16 PM EDT', age: '8 years 9 months 29 days', sinceLast: '1 year 2 months 30 days', lotNumber: 'L009463', tradeName: 'HB Remcombivax HB MC', manufacturer: 'Merck Canada', doseNumber: 1, doseage: 1.0, site: 'Anterolateral Thigh Lt', route: 'Oral: PO', reason: 'Occupational Risk', required: 1 },
  {immAgent: 'HPV', dateAdministered: '2017 Jun 12', timeAdministered: '12:16 PM EDT', age: '8 years 9 months 29 days', sinceLast: '1 year 2 months 30 days', lotNumber: 'L009463', tradeName: 'HB Remcombivax HB MC', manufacturer: 'Merck Canada', doseNumber: 1, doseage: 1.0, site: 'Anterolateral Thigh Lt', route: 'Oral: PO', reason: 'Occupational Risk', required: 2 },
];