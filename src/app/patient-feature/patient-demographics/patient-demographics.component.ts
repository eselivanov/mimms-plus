import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PatientService } from '../services/patient.service';
import { Patient } from '../../models/patient';

@Component({
  selector: 'app-patient-demographics',
  templateUrl: './patient-demographics.component.html',
  styleUrls: ['./patient-demographics.component.css', '../../styles/shared-styles.css', '../../styles/list-card.css']
})
export class PatientDemographicsComponent implements OnInit {
  patient: any;
  constructor(
    private route: ActivatedRoute,
    public patientService: PatientService,
    
  ) { }
  
  ngOnInit() {
    let patientId = this.route.snapshot.paramMap.get('id')
    console.log('init called')
    //if (this.patientService.selectedPatient){
    //this.patient = this.patientService.selectedPatient
    //}
    
  }

  setPatient(patient) {
    this.patient = patient
  }

}
