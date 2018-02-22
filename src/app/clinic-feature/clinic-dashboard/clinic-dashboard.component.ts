import { Component, OnInit } from '@angular/core';

import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import {MatTableDataSource} from '@angular/material';

import 'rxjs/add/operator/switchMap';
import { ParamMap } from '@angular/router/src/shared';
import { Chart } from 'chart.js';

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
  serviceDataArray = [];
  serviceLabelArray = [];
  syncDataArray = [];
  syncLabelArray = [];
  serviceChart = [];
  syncChart = []
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private titleService: Title,
  ) { }

  ngOnInit() {
    SERVICE_DATA.forEach((service) => {
      this.serviceDataArray.push(service.count)
      this.serviceLabelArray.push(service.label)
      //this.dataArray.push({value: service.count, label: service.label})
    })

    SYNC_DATA.forEach((service) => {
      this.syncDataArray.push(service.count)
      this.syncLabelArray.push(service.label)
      //this.dataArray.push({value: service.count, label: service.label})
    })
    /*let data = {
      dataset: [{
        data: this.dataArray
      }],
      labels: this.labelArray
    }*/
    var options = {
      responsive: true,
      legend: {
          display: true,
          position: "left",
          labels: {
              fontColor: "#333",
              fontSize: 16
          }
      },
      animation: {
        animateScale: true
      }
      
    };
    //console.log(JSON.stringify(this.dataArray) + ' ' + JSON.stringify(this.labelArray))
    let serviceData = {
        datasets: [{
            data: this.serviceDataArray,
            backgroundColor: [
              "rgba(0, 150, 136, 0.2)",
              "rgba(247, 70, 74, 0.2)",
              "rgba(132, 99, 255, 0.2)",
              "rgba(253, 180, 92, 0.2)",
              "rgba(99, 132, 255, 0.2)"
            ],
            borderColor: [
              "#009688",
              "#F7464A",
              "#8463FF",
              "#FDB45C",
              "#6384FF"
          ]
        }],
        labels: this.serviceLabelArray,
    };
    this.serviceChart = new Chart('service-canvas', {
        type: 'doughnut',
        data: serviceData,
        options: options
    });

    let syncData = {
        datasets: [{
            data: this.syncDataArray,
            backgroundColor: [
              "rgba(247, 70, 74, 0.2)",
              "rgba(0, 150, 136, 0.2)",
              "rgba(132, 99, 255, 0.2)",
              "rgba(253, 180, 92, 0.2)",
              "rgba(99, 132, 255, 0.2)"
            ],
            borderColor: [
              "rgba(247, 70, 74, 1)",
              "rgba(0, 150, 136, 1)",
              "rgba(132, 99, 255, 1)",
              "rgba(253, 180, 92, 1)",
              "rgba(99, 132, 255, 1)"
          ],
          borderWidth: 2
        }],
        labels: this.syncLabelArray,
    };
    this.syncChart = new Chart('sync-canvas', {
      type: 'bar',
      data: syncData,
      options: options
  });
  }

  

}

/*export interface SyncDataExample {
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
*/
export interface SyncDataExample {
  label:string,
  count:number,
}


const SYNC_DATA: SyncDataExample[] = [
  {label:'Download Failed',count: 0}, {label: 'Download Succeeded' , count: 28}, {label: 'To Upload', count: 12}, {label:'Upload Failed', count: 2}, {label: 'Upload Succeeded',count: 1}, {label:'Upload Review', count: 0}, {label:'New', count: 3}, {label:'In PHIX', count: 3}
];

/*export interface ServiceDataExample {
  absent: number,
  needed: number,
  notNeeded: number,
  provided: number,
  immunized: number,
}

const SERVICE_DATA: ServiceDataExample[] = [
  {absent: 0, needed: 12, notNeeded: 1, provided: 5, immunized: 10},
];*/

export interface ServiceDataExample {
  label:string,
  count:number,
}

const SERVICE_DATA: ServiceDataExample[] = [
  {label:'Absent',count: 0}, {label: 'Needed' , count: 12}, {label: 'Not Needed', count: 1}, {label:'Provided', count: 5}, {label: 'Immunized',count: 10}
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
