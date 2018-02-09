import { Component, OnInit } from '@angular/core';
import { MatRadioButton, MatRadioGroup } from '@angular/material';

@Component({
  selector: 'app-create-new-consent',
  templateUrl: './create-new-consent.component.html',
  styleUrls: ['./create-new-consent.component.css', '../../styles/shared-styles.css']
})
export class CreateNewConsentComponent implements OnInit {
  consent:string = "Grant"
  constructor() { }

  ngOnInit() {
  }

  consentChange = (event) => {
    console.log(event.selectedIndex)
    this.consent = event.value
  }

}
