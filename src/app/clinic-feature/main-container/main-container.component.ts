import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { NavigationStart } from '@angular/router';
import { NavigationEnd } from '@angular/router';
import 'rxjs/add/operator/filter';
import { Input } from '@angular/core/src/metadata/directives';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { UserDialogComponent } from '../../dialogs/user-dialog/user-dialog.component';
import { RemoteClinicsComponent } from '../../dialogs/remote-clinics/remote-clinics.component';
import { AddPatientDialogComponent } from '../../dialogs/add-patient-dialog/add-patient-dialog.component';
import { RemoteClinicListService } from '../services/remote-clinic-list.service';
import { UserService } from '../../authentication-feature/services/user.service';
import { PatientService } from '../../patient-feature/services/patient.service';
import { Subject } from 'rxjs/Subject';
import { CarePlan } from '../../models/care-plan';

@Component({
  selector: 'app-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.css',  '../../styles/main-container-shared.css']
})
export class MainContainerComponent implements OnInit {
  showBackButton = false
  currentURL = ""
  currentPage = ""
  _subscription

  constructor(
    private router: Router, 
    public titleService: Title, 
    public dialog: MatDialog,
    private route: ActivatedRoute,
    private clinicService: RemoteClinicListService,
    private userService: UserService,
    private patientService: PatientService
  ) { 

    router.events.filter(e => e instanceof NavigationEnd).subscribe((e: NavigationEnd) => {
      console.log(e.url);
      this.currentURL = e.url
      if (this.currentURL === "/clinics") {
        console.log(`setting page to clinic`)
        this.currentPage = "clinics"
      }else{
        let clinicId = this.route.firstChild.snapshot.paramMap.get('id')
        this.titleService.setTitle('')
        this.clinicService.getClinicDetails(clinicId, this.userService.user.getUserLogOn())    
        if (this.currentURL.includes("details"))  {
          console.log(`setting page to details`)
          this.currentPage = "details"
        }else if (this.currentURL.includes("dashboard"))  {
          console.log(`setting page to dashboard`)
          this.currentPage = "dashboard"
        }else {
          console.log(`setting page to clients`)
          this.currentPage = "clients"
        }
      }
    });
  }

  ngOnInit() {
    //this.name = nameService.name;
    this._subscription = this.clinicService.clinicSubject.subscribe((value) => { 
      this.titleService.setTitle(value.getTitle())
    });
  }

  ngOnDestroy() {
    this._subscription.unsubscribe()
  }

  /*getClinicDetailsCompletionBlock() {
    //this.clinic = this.clinicService.clinicDetails
    this.titleService.setTitle(this.clinicService.clinicDetails.getTitle())
    if (this.currentPage === "clients") {
      this.patientService.getAllPatients(this.clinicService.clinicDetails)
    }
    
  }*/

  goBack = () => {
    if (this.router.url.includes("details") || this.router.url.includes("dashboard")){
      let clinicId = this.route.firstChild.snapshot.paramMap.get('id')
      this.router.navigate([`/clinics/${clinicId}`]);
    }else{
      this.router.navigate(['/clinics']);
    }
    
  }

  openClinicDashboard = () => {

    let clinicId = this.route.firstChild.snapshot.paramMap.get('id')
    this.router.navigate([`/clinics/${clinicId}/dashboard`]);
  }

  openClinicDetails = () => {
    let clinicId = this.route.firstChild.snapshot.paramMap.get('id')
    this.router.navigate([`/clinics/${clinicId}/details`]);
  }

  openInfoDialog = () => {
    let dialogRef = this.dialog.open(UserDialogComponent, {
      width: '600px',
      height: '500px',
      data: { }
    });
  }

  openAddDialog = () => {
    if (this.currentURL === "/clinics"){
      let dialogRef = this.dialog.open(RemoteClinicsComponent, {
        width: '800px',
        height: '500px',
        data: { }
      });
    }else{
      let dialogRef = this.dialog.open(AddPatientDialogComponent, {
        width: '80%',
        height: '90%',
        data: { }
      });
    }
    
  }

}
