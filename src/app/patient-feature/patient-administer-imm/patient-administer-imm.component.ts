import { Component, OnInit } from '@angular/core';

import {MatTableDataSource} from '@angular/material';
@Component({
  selector: 'app-patient-administer-imm',
  templateUrl: './patient-administer-imm.component.html',
  styleUrls: ['./patient-administer-imm.component.css', '../../styles/shared-styles.css', '../../styles/table-shared.css']
})
export class PatientAdministerImmComponent implements OnInit {
  immDisplayedRows = ['selectAction','immAgent', 'lotNumber', 'tradeName', 'dosage', 'route', 'site'];
  immDataSource = new MatTableDataSource(IMM_DATA);

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
  dosage: Number;
  site: string;
  route: string;
  reason: string;
}
export interface ImmTuple {
  isSelected: boolean;
  immunization: Immunization
}

const IMM_DATA: ImmTuple[] = [
  {isSelected:true, immunization:{immAgent: 'HB', dateAdministered: '2017 Jun 12', timeAdministered: '12:16 PM EDT', age: '8 years 9 months 29 days', sinceLast: '1 year 2 months 30 days', lotNumber: 'L009463', tradeName: 'HB Remcombivax HB MC', manufacturer: 'Merck Canada', doseNumber: 1, dosage: 1.0, site: 'Anterolateral Thigh Lt', route: 'Oral: PO', reason: 'Occupational Risk'}},
  {isSelected:false, immunization:{immAgent: 'HPV', dateAdministered: '2017 Jun 12', timeAdministered: '12:16 PM EDT', age: '8 years 9 months 29 days', sinceLast: '1 year 2 months 30 days', lotNumber: 'L009463', tradeName: 'HB Remcombivax HB MC', manufacturer: 'Merck Canada', doseNumber: 1, dosage: 1.0, site: 'Anterolateral Thigh Lt', route: 'Oral: PO', reason: 'Occupational Risk'}},
];