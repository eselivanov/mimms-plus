import { Component, OnInit, ElementRef } from '@angular/core';

import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Chart } from 'chart.js';

@Component({
  selector: 'app-clinic-dashboard-graph-view',
  templateUrl: './clinic-dashboard-graph-view.component.html',
  styleUrls: ['./clinic-dashboard-graph-view.component.css', '../../styles/shared-styles.css', '../../styles/table-shared.css']
})
export class ClinicDashboardGraphViewComponent implements OnInit {

  serviceDataArray = [];
  serviceLabelArray = [];
  syncDataArray = [];
  syncLabelArray = [];
  administeredDataArray = [];
  administeredLabelArray = [];

  serviceChart = [];
  syncChart = [];
  administeredChart = [];

  constructor(
    private elementRef: ElementRef
  ) { }

  ngOnInit() {
    SERVICE_DATA.forEach((service) => {
      this.serviceDataArray.push(service.count)
      this.serviceLabelArray.push(service.label)
      //this.dataArray.push({value: service.count, label: service.label})
    })

    SYNC_DATA.forEach((syncStatus) => {
      this.syncDataArray.push(syncStatus.count)
      this.syncLabelArray.push(syncStatus.label)
    })

    AMINISTERED_DATA.forEach((imm) => {
      this.administeredDataArray.push(imm.count)
      this.administeredLabelArray.push(imm.agent)
    })
    
    /* SERVICE CHART CONFIG */
    var serviceOptions = {
      responsive: true,
      legend: {
        display: true,
        position: "top",
        labels: {
            fontColor: "#333",
            fontSize: 16
        }
      },
      animation: {
        animateScale: true,
        easing: "easeOutBounce"
      },
      title: {
        display: true,
        position: "left",
        text: "Service Count",
        fontSize: 20,
        fontColor: "#009688"
      },
      
    };

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

    let serviceRef = this.elementRef.nativeElement.querySelector(`#service-canvas`);
    this.serviceChart = new Chart(serviceRef, {
        type: 'doughnut',
        data: serviceData,
        options: serviceOptions
    });

    /* SYNC CHART CONFIG */
    var syncOptions = {
      responsive: true,
      legend: {
          display: false,
      },
      animation: {
        animateScale: true,
        easing: "easeOutBounce"
      },
      title: {
        display: true,
        position: "left",
        text: "Sync Status",
        fontSize: 20,
        fontColor: "#009688"
      },
      scales:{
        yAxes: [{
          display: true,
          ticks: {
            suggestedMin: 0,
            beginAtZero: true  
          }
        }]
      }
      
      
    };

    let syncData = {
      datasets: [{
        data: this.syncDataArray,
        backgroundColor: [
          "rgba(247, 129, 191, 0.2)",
          "rgba(132, 99, 255, 0.2)",
          "rgba(165, 86, 40, 0.2)",
          "rgba(247, 70, 74, 0.2)",
          "rgba(0, 150, 136, 0.2)",
          "rgba(253, 180, 92, 0.2)",
          "rgba(99, 132, 255, 0.2)",
          "rgba(153, 153, 153, 0.2)",
        ],
        borderColor: [
          "rgba(247, 129, 191, 1)",
          "rgba(132, 99, 255, 1)",
          "rgba(165, 86, 40, 1)",
          "rgba(247, 70, 74, 1)",
          "rgba(0, 150, 136, 1)",
          "rgba(253, 180, 92, 1)",
          "rgba(99, 132, 255, 1)",
          "rgba(153, 153, 153, 1)",
        ],
        borderWidth: 2
      }],
      labels: this.syncLabelArray,
    };

    let syncRef = this.elementRef.nativeElement.querySelector(`#sync-canvas`);
    this.syncChart = new Chart(syncRef, {
      type: 'bar',
      data: syncData,
      options: syncOptions
    });

    /* ADMINISTERED CHART CONFIG */

    var administeredOptions = {
      responsive: true,
      legend: {
          display: false,
      },
      animation: {
        animateScale: true,
        easing: "easeOutBounce"
      },
      title: {
        display: true,
        position: "left",
        text: "Administered Count",
        fontSize: 20,
        fontColor: "#009688"
      },
      scales:{
        yAxes: [{
          display: true,
          ticks: {
            suggestedMin: 0,
            beginAtZero: true  
          }
        }]
      }
      
    };

    let administeredData = {
      datasets: [{
        data: this.administeredDataArray,
        backgroundColor: "rgba(0, 150, 136, 0.2)",
        borderColor: "rgba(0, 150, 136, 1)",
        borderWidth: 2
      }],
      labels: this.administeredLabelArray,
    };
    let administeredRef = this.elementRef.nativeElement.querySelector(`#administered-canvas`);
    this.administeredChart = new Chart(administeredRef, {
      type: 'bar',
      data: administeredData,
      options: administeredOptions
    });
  }

}

export interface SyncDataExample {
  label:string,
  count:number,
}


const SYNC_DATA: SyncDataExample[] = [
  {label:'Download Failed',count: 2}, {label: 'Download Succeeded' , count: 28}, {label: 'To Upload', count: 12}, {label:'Upload Failed', count: 2}, {label: 'Upload Succeeded',count: 1}, {label:'Upload Review', count: 3}, {label:'New', count: 3}, {label:'In PHIX', count: 3}
];

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
