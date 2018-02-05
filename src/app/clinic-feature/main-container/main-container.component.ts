import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { NavigationStart } from '@angular/router';
import { NavigationEnd } from '@angular/router';
import 'rxjs/add/operator/filter';
import { Input } from '@angular/core/src/metadata/directives';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { UserDialogComponent } from '../../dialogs/user-dialog/user-dialog.component';
import { RemoteClinicsComponent } from '../../dialogs/remote-clinics/remote-clinics.component';
import { AddPatientDialogComponent } from '../../dialogs/add-patient-dialog/add-patient-dialog.component';

@Component({
  selector: 'app-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.css']
})
export class MainContainerComponent implements OnInit {
  showBackButton = false
  currentURL = ""
  

  constructor(private router: Router, public titleService: Title, public dialog: MatDialog) { 
    /*router.events.subscribe(e => {
        if (e instan)
        console.log(e.url);
      
    });*/
    router.events.filter(e => e instanceof NavigationEnd).subscribe((e: NavigationEnd) => {
      console.log(e.url);
      this.currentURL = e.url
      if (this.currentURL !== "/clinics"){
        this.showBackButton = true 
      }else{
        this.showBackButton = false
      }
    });
  }

  ngOnInit() {
  }

  goBack = () => {
    this.router.navigate(['/clinics']);
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
        width: '800px',
        height: '500px',
        data: { }
      });
    }
    
  }

}
