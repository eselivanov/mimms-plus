import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import {MatTableDataSource} from '@angular/material';
import { RemoteClinicListService } from '../../clinic-feature/services/remote-clinic-list.service';

@Component({
  selector: 'app-remote-clinics',
  templateUrl: './remote-clinics.component.html',
  styleUrls: ['./remote-clinics.component.css', '../../styles/shared-dialog-styles.css', '../../styles/table-shared.css' ]
})
export class RemoteClinicsComponent implements OnInit {

  displayedColumns = ['id', 'title', 'dates', 'routingAction'];
  dataSource = new MatTableDataSource(REMOTE_CLINIC_DATA);
  remoteClinics = null;
  constructor(
    public dialogRef: MatDialogRef<RemoteClinicsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private remoteClinicService: RemoteClinicListService
  ) { }

  ngOnInit() {
    //this.getClinics()
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  onCloseClick = () => {
    this.dialogRef.close();
  }

  getClinics(): void {
    this.remoteClinicService.getRemoteClinics().subscribe(clinics => this.remoteClinics = clinics);
  }
}

export interface RemoteClinic {
  id: string;
  name: string;
  dates: string;
  clients: number;
  downloaded: string;
  status: string;
}

const REMOTE_CLINIC_DATA: RemoteClinic[] = [
  {id: '249291', name: 'DC-Test-Remote Clinic 1', dates:'2017 Dec 21', clients: 38, downloaded: '2018 Jan 19', status: 'warning'},
  {id: '222141', name: 'DC-Test-Remote Clinic 2', dates:'2017 May 12', clients: 38, downloaded: '2018 Jan 18', status: 'warning'},
  {id: '249441', name: 'DC-Test-Remote Clinic 3', dates:'2017 Dec 13', clients: 38, downloaded: '2018 Jan 17', status: 'warning'},
  {id: '223412', name: 'DC-Test-Remote Clinic 4', dates:'2017 Feb 18', clients: 38, downloaded: '2018 Jan 19', status: 'warning'},
];
