import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-patient-notes',
  templateUrl: './patient-notes.component.html',
  styleUrls: ['./patient-notes.component.css', '../../styles/table-shared.css', '../../styles/shared-styles.css']
})
export class PatientNotesComponent implements OnInit {
  notesDisplayedRows = ['date', 'subject', 'note', 'modalAction']
  celsDisplayedRows = ['date', 'direction', 'topic', 'comments', 'modalAction']
  
  notesDataSource = new MatTableDataSource(NOTES_DATA);
  celsDataSource = new MatTableDataSource(CELS_DATA);

  constructor() { }

  ngOnInit() {
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.notesDataSource.filter = filterValue;
    this.celsDataSource.filter = filterValue;
  }

}

export interface Note {
  createdOn: string;
  subject: string;
  note: string;
}

export interface CommunicationEventLog {
  title: string;
  type: string;
  createdOn: string;
  direction: string;
  topic: string;
  comments: string;
  outcome: string
}

const NOTES_DATA: Note[] = [
  {createdOn: '2018 Jan 11 17:22 EST', subject: 'Suspension Process', note: 'Suspension rescinded on 2018 Jan 11.'},
  {createdOn: '2018 Oct 08 12:42 EST', subject: 'Client Wanings', note: 'test.'},
  {createdOn: '2018 May 01 19:22 EST', subject: 'Allergies', note: 'EWWWW HATE EMM.'},
  {createdOn: '2018 Jan 11 17:22 EST', subject: 'Test', note: 'Testing 1 2 3 .....'},
  {createdOn: '2018 Feb 19 11:01 EST', subject: 'Suspension Process', note: 'Hello World.'},
  {createdOn: '2018 Oct 08 12:42 EST', subject: 'Client Wanings', note: 'test.'},
  {createdOn: '2018 Oct 08 12:42 EST', subject: 'Client Wanings', note: 'test.'},
  {createdOn: '2018 Oct 08 12:42 EST', subject: 'Client Wanings', note: 'test.'},
  {createdOn: '2018 Oct 08 12:42 EST', subject: 'Client Wanings', note: 'test.'},
  {createdOn: '2018 Oct 08 12:42 EST', subject: 'Client Wanings', note: 'test.'},
  {createdOn: '2018 Oct 08 12:42 EST', subject: 'Client Wanings', note: 'test.'},
  {createdOn: '2018 Oct 08 12:42 EST', subject: 'Client Wanings', note: 'test.'},
  {createdOn: '2018 Oct 08 12:42 EST', subject: 'Client Wanings', note: 'test.'},
  {createdOn: '2018 Oct 08 12:42 EST', subject: 'Client Wanings', note: 'test.'},
  {createdOn: '2018 Oct 08 12:42 EST', subject: 'Client Wanings', note: 'test.'},
]

const CELS_DATA: CommunicationEventLog[] = [
  {title: 'Immunization', type: 'Electronic Data', createdOn: '2017 Feb 09', direction: 'Inbound', topic: 'Immunization', comments: 'Destination: Grey Bruce Unit Iris Transferred In Date: 2008/10/29', outcome: 'No Follow Up Required'},
  {title: 'Allergy', type: 'Electronic Data', createdOn: '2017 May 09', direction: 'Outbound', topic: 'Allergy', comments: 'Destination: Grey Bruce Unit Iris Transferred In Date: 2015/12/13', outcome: 'No Follow Up Required'}, 
  {title: 'Test', type: 'Electronic Data', createdOn: '2017 May 09', direction: 'Outbound', topic: 'Allergy', comments: 'Destination: Grey Bruce Unit Iris Transferred In Date: 2015/12/13', outcome: 'No Follow Up Required'},
  {title: 'Allergy', type: 'Electronic Data', createdOn: '2017 May 09', direction: 'Outbound', topic: 'Allergy', comments: 'Test Destination: Grey Bruce Unit Iris Transferred In Date: 2015/12/13', outcome: 'No Follow Up Required'},
]