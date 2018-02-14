import { Component, OnInit } from '@angular/core';

import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import {MatTableDataSource} from '@angular/material';

import 'rxjs/add/operator/switchMap';
import { ParamMap } from '@angular/router/src/shared';

@Component({
  selector: 'app-clinic-dashboard',
  templateUrl: './clinic-dashboard.component.html',
  styleUrls: ['./clinic-dashboard.component.css', '../../styles/shared-styles.css', '../../styles/table-shared.css']
})
export class ClinicDashboardComponent implements OnInit {

  syncDisplayedColumns = ['downloadFailed', 'downloadSucceeded', 'toUpload', 'uploadFailed', 'uploadSucceeded', 'uploadReview', 'new', 'inPhix'];
  syncDataSource = new MatTableDataSource(SYNC_DATA);
  serviceDisplayedColumns = ['absent', 'needed', 'notNeeded', 'provided', 'immunized'];
  serviceDataSource = new MatTableDataSource(SERVICE_DATA);
  administeredDisplayedColumns = ['agent', 'tradeName', 'lotNumber', 'count']
  administeredDataSource = new MatTableDataSource(AMINISTERED_DATA);
  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private titleService: Title,
  ) { }

  ngOnInit() {
  }

}

export interface SyncDataExample {
  downloadFailed: number,
  downloadSucceeded: number,
  toUpload: number,
  uploadFailed: number,
  uploadSucceeded: number,
  uploadReview: number,
  new: number,
  inPhix: number
}

const SYNC_DATA: SyncDataExample[] = [
  {downloadFailed: 0, downloadSucceeded: 28, toUpload: 12, uploadFailed: 2, uploadSucceeded: 1, uploadReview: 0, new: 3, inPhix: 3},
];

export interface ServiceDataExample {
  absent: number,
  needed: number,
  notNeeded: number,
  provided: number,
  immunized: number,
}

const SERVICE_DATA: ServiceDataExample[] = [
  {absent: 0, needed: 12, notNeeded: 1, provided: 5, immunized: 10},
];

export interface AdministeredDataExample {
  agent: string,
  tradeName: string,
  lotNumber: string,
  count: number,
}

const AMINISTERED_DATA: AdministeredDataExample[] = [
  {agent: 'HPV-4', tradeName: 'HPV', lotNumber: 'C2344AN', count: 3},
  {agent: 'Tdap-IPV', tradeName: 'Tdap-IPV Adacel-Polio SP', lotNumber: 'C4621AA', count: 7}
]
