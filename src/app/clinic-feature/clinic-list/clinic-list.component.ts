import { Component, OnInit } from '@angular/core';


import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import {MatTableDataSource} from '@angular/material';


@Component({
  selector: 'app-clinic-list',
  templateUrl: './clinic-list.component.html',
  styleUrls: ['./clinic-list.component.css', '../../styles/table-shared.css']
})
export class ClinicListComponent implements OnInit {

  displayedColumns = ['id', 'title', 'dates', 'clients', 'downloaded', 'status', 'routingAction'];
  dataSource = new MatTableDataSource(CLINIC_DATA);
  
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private router: Router,
    private titleService: Title,
  ) { }

  ngOnInit() {
    this.titleService.setTitle('Clinics');
    console.log(`path ${this.route.snapshot.url}`)
  }

  /*goBack(): void {
    this.location
  }*/

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
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
