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
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  
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
export interface Element {
  id: string;
  name: string;
  dates: string;
  clients: number;
  downloaded: string;
  status: string;
}

const ELEMENT_DATA: Element[] = [
  {id: '249291', name: 'DC-Test Clinic 1', dates:'2017 Dec 21', clients: 38, downloaded: '2018 Jan 19', status: 'warning'},
  {id: '222141', name: 'DC-Test Clinic 2', dates:'2017 May 12', clients: 38, downloaded: '2018 Jan 18', status: 'warning'},
  {id: '249441', name: 'DC-Test Clinic 3', dates:'2017 Dec 13', clients: 38, downloaded: '2018 Jan 17', status: 'warning'},
  {id: '223412', name: 'DC-Test Clinic 4', dates:'2017 Feb 18', clients: 38, downloaded: '2018 Jan 19', status: 'warning'},
];
