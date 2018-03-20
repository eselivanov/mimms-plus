import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import {MatTableDataSource} from '@angular/material';
import { RemoteClinicListService } from '../../clinic-feature/services/remote-clinic-list.service';
import { UserSelectComponent } from '../../authentication-feature/user-select/user-select.component';
import { UserService } from '../../authentication-feature/services/user.service';

@Component({
  selector: 'app-remote-clinics',
  templateUrl: './remote-clinics.component.html',
  styleUrls: ['./remote-clinics.component.css', '../../styles/shared-dialog-styles.css', '../../styles/table-shared.css' ]
})
export class RemoteClinicsComponent implements OnInit {
  remoteClinics = [];
  displayedColumns = ['id', 'title', 'dates', 'routingAction'];
  dataSource = new MatTableDataSource();
  
  constructor(
    public dialogRef: MatDialogRef<RemoteClinicsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private clinicService: RemoteClinicListService,
    private userService: UserService,
  ) { }

  ngOnInit() {
    //reimplement using same method as clinicList
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
  
  /*
  reimplement using same method as clinicList
  getClinics(): void {
      var roleRef = null
      var orgVal = null
      for (var role of this.userService.user.role) {
        roleRef = role.organization.reference
      }
      console.log(roleRef)
      for (var obj of this.userService.user.contained) {
        if (roleRef.includes(obj.id)) {
          for (var identifier of obj.identifier) {
            orgVal = identifier.value
          }
        }
      }
      console.log(orgVal)
      this.clinicService.getRemoteClinics(orgVal).subscribe(
        data => {
          console.log(`clinic list ${JSON.stringify(data.entry)}`)
          this.remoteClinics = data.entry
          console.log(`remote list ${this.remoteClinics}`)
          this.dataSource = new MatTableDataSource(this.remoteClinics);
        },
        error => {

        }
      )
  }

  getDates(clinic) {
    var dateArray = []
    for (var extension of clinic.resource.extension) {
      if (extension.url === "CarePlan/clinic#date") {
        dateArray.push(extension.valueDate)
      }
    }
    return dateArray.join("\n")
  }*/
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
