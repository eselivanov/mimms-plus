import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-create-new-special-consideration',
  templateUrl: './create-new-special-consideration.component.html',
  styleUrls: ['./create-new-special-consideration.component.css', '../../styles/shared-styles.css']
})
export class CreateNewSpecialConsiderationComponent implements OnInit {
  @Input() type: string;
  constructor() { }

  ngOnInit() {
  }

}
