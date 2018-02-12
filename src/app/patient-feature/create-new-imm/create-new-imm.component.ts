import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-create-new-imm',
  templateUrl: './create-new-imm.component.html',
  styleUrls: ['./create-new-imm.component.css', '../../styles/shared-styles.css']
})
export class CreateNewImmComponent implements OnInit {
  routeVal = "Intradermal: ID"
  reasonVal = "Contact Management"
  lotVal = "M036461"
  tradeVal = "HPV-4 Gardasil MC"
  manufacturerVal = "Merk Canada"
  agentVal = "HPV-4"
  @Input() historical: Boolean;
  constructor() { }

  ngOnInit() {
  }

}
