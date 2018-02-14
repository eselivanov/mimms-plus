import { Component, OnInit } from '@angular/core';

import {MatTableDataSource} from '@angular/material';
import {SelectionModel} from '@angular/cdk/collections';

@Component({
  selector: 'app-search-patient',
  templateUrl: './search-patient.component.html',
  styleUrls: ['./search-patient.component.css', '../../styles/shared-styles.css', '../../styles/table-shared.css']
})
export class SearchPatientComponent implements OnInit {
  displayedColumns = ['select', 'name', 'dateOfBirth', 'gender', 'hcn', 'detailButton'];
  dataSource = new MatTableDataSource(PATIENT_DATA);
  selection = new SelectionModel<Patient>(true, []);

  constructor() { }

  ngOnInit() {
  }
  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
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
  hcn: string;
  service: string;
}

const PATIENT_DATA: Patient[] = [
  {warningIcon: 'warning', disclosureIcon:'info_outline', rescindIcon:'school', name: 'Test, Joelly', dateOfBirth:'1993 Dec 21', gender: 'male', clientId: '1001316543', hcn: '1234567897', service: 'Needed'},
  {warningIcon: 'warning', disclosureIcon:'', rescindIcon:'', name: 'Test2, Joelly1', dateOfBirth:'2000 May 21', gender: 'female', clientId: '1001099942', hcn: '4534567897', service: 'Needed'},
  {warningIcon: 'warning', disclosureIcon:'', rescindIcon:'school', name: 'Doe, John', dateOfBirth:'2000 May 22', gender: 'male', clientId: '100191142', hcn: '123427897', service: 'Immunized'},
];