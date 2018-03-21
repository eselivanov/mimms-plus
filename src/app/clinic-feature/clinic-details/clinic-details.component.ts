import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import {MatTableDataSource} from '@angular/material';

import 'rxjs/add/operator/switchMap';
import { ParamMap } from '@angular/router/src/shared';
import { CDK_TABLE_TEMPLATE } from '@angular/cdk/table';
import { CarePlan } from '../../models/care-plan';
import { RemoteClinicListService } from '../services/remote-clinic-list.service';
import { UserService } from '../../authentication-feature/services/user.service';

@Component({
  selector: 'app-clinic-details',
  templateUrl: './clinic-details.component.html',
  styleUrls: ['./clinic-details.component.css', '../../styles/shared-styles.css', '../../styles/table-shared.css', '../../styles/list-card.css']
})
export class ClinicDetailsComponent implements OnInit {
  //clinicId: string;
  clinic: CarePlan;

  immAgentDisplayedRows = ['immAgent', 'lotNumber', 'tradeName', 'dosage', 'route', 'reason', 'required'];
  immAgentDataSource = new MatTableDataSource(IMM_AGENT_DATA);
  
  providerDisplayedRows = ['id', 'name', 'designation'];
  providerDataSource = new MatTableDataSource(PROVIDER_DATA);
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private titleService: Title,
    private clinicService: RemoteClinicListService,
    private userService: UserService
  ) { }

  ngOnInit() {
    let clinicId = this.route.snapshot.paramMap.get('id')
    //this.setClinicInContext()
    this.clinicService.getClinicDetailsWithCompletion(clinicId, this.userService.user.getUserLogOn(), this.getClinicDetailsCompletionBlock.bind(this))
  }

  getClinicDetailsCompletionBlock = () => {

    this.clinic = this.clinicService.clinicDetails
    
  }

}

/*export interface Clinic {
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
];*/


export interface Vaccine {
  immAgent: string;
  lotNumber: string;
  tradeName: string;
  manufacturer: string;
  doseage: Number;
  route: string;
  reason: string;
  required: number;
}

const IMM_AGENT_DATA: Vaccine[] = [
  {immAgent: 'HB', lotNumber: 'L009463', tradeName: 'HB Remcombivax HB MC', manufacturer: 'Merck Canada', doseage: 1.0, route: 'Oral: PO', reason: 'Occupational Risk', required: 1 },
  {immAgent: 'HPV', lotNumber: 'L009463', tradeName: 'HB Remcombivax HB MC', manufacturer: 'Merck Canada', doseage: 1.0, route: 'Oral: PO', reason: 'Occupational Risk', required: 2 },
];

export interface Providers {
  id: string;
  name: string;
  designation: string;
}

const PROVIDER_DATA: Providers[] = [
  {id: '425822', name: 'Kapadia, Amol', designation: 'RNP'},
  {id: '13824', name: 'Nikulina Mila', designation: 'MD'},
];