import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-new-agent',
  templateUrl: './create-new-agent.component.html',
  styleUrls: ['./create-new-agent.component.css', '../../styles/shared-styles.css']
})
export class CreateNewAgentComponent implements OnInit {
  routeVal = "Intradermal: ID"
  reasonVal = "Contact Management"
  lotVal = "M036461"
  tradeVal = "HPV-4 Gardasil MC"
  manufacturerVal = "Merk Canada"
  agentVal = "HPV-4"
  constructor() { }

  ngOnInit() {
  }

}
