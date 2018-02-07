import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-patient',
  templateUrl: './create-patient.component.html',
  styleUrls: ['./create-patient.component.css', '../../styles/shared-styles.css']
})
export class CreatePatientComponent implements OnInit {
  panelOpenState: boolean = false;
  constructor() { }

  ngOnInit() {
  }

}
