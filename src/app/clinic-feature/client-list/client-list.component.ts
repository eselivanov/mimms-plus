import { Component, OnInit } from '@angular/core';

import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import {MatTableDataSource} from '@angular/material';

import 'rxjs/add/operator/switchMap';
import { ParamMap } from '@angular/router/src/shared';
import { RemoteClinicListService } from '../services/remote-clinic-list.service';
import { PatientService } from '../../patient-feature/services/patient.service';
import { Observable } from 'rxjs/Observable';
import { DataSource } from '@angular/cdk/collections';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css', '../../styles/table-shared.css', '../../styles/shared-styles.css']
})
export class ClientListComponent implements OnInit {
  displayedColumns = ['warningIcon', 'disclosureIcon', 'rescindIcon', 'name', 'dateOfBirth', 'gender', 'clientId', 'service', 'routingAction'];
  dataSource = new PatientDataSource(this.patientService)
  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private titleService: Title,
    private clinicService: RemoteClinicListService,
    private patientService: PatientService
  ) { }

  ngOnInit() {
    //let selectedClinic = ELEMENT_DATA.filter(element => element.id === this.route.snapshot.paramMap.get('id'));
    let clinicId = this.route.snapshot.paramMap.get('id')
    

    this.clinicService.getClinicDetails(clinicId).subscribe(
      data => {
        console.log(`clinic details = ${JSON.stringify(data)}`)
        this.clinicService.clinicDetails = data
        this.setClinicName(clinicId)
        this.patientService.getAllPatients(this.clinicService.clinicDetails)
        /*this.patientService.patientSubject.subscribe(
          data => {

          },
          error => {

          }
        )*/
        //this.dataSource = new MatTableDataSource(this.)
      },
      error => {

      }
    )
    /*var clinicName = this.route.paramMap
    .switchMap((params: ParamMap) =>
      this.setClinicName(params.get('id'))
    );*/
    /*this.route.paramMap.switchMap((params: ParamMap) =>
      clinicId = params.get('id')

    )*/
    
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    //this.dataSource.filter = filterValue;
  }

  setClinicName = (id) => {
    //let selectedClinic = //CLINIC_DATA.filter(element => element.id === id);
    //if (selectedClinic.length > 0) {
      this.titleService.setTitle(this.clinicService.clinicDetails.description)//selectedClinic[0].name);
    //}else {
      //this.titleService.setTitle("Unkown Clinic");
    //}
    
  }

}
  
export class PatientDataSource extends DataSource<any> {
  constructor(private patientService: PatientService) {
    super();
  }
  connect(): Subject<any[]> {
    return this.patientService.patientSubject;//this.patientService.getAllPatients();
  }
  disconnect() {}
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