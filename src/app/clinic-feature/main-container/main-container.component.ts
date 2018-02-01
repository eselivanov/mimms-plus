import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { NavigationStart } from '@angular/router';
import { NavigationEnd } from '@angular/router';
import 'rxjs/add/operator/filter';
import { Input } from '@angular/core/src/metadata/directives';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { UserDialogComponent } from '../../dialogs/user-dialog/user-dialog.component';

@Component({
  selector: 'app-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.css']
})
export class MainContainerComponent implements OnInit {
  showBackButton = false
  currentURL = ""
  animal: string = "kangeroo";
  name: string = "John Smith";

  constructor(private router: Router, public titleService: Title, public dialog: MatDialog) { 
    /*router.events.subscribe(e => {
        if (e instan)
        console.log(e.url);
      
    });*/
    router.events.filter(e => e instanceof NavigationEnd).subscribe((e: NavigationEnd) => {
      console.log(e.url);
      this.currentURL = e.url
      if (this.currentURL !== "/clinics"){
        if (this.currentURL !== "/" && this.currentURL !== ""){
          this.showBackButton = true
        }else{
          this.showBackButton = false
        }
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

  openDialog = () => {
    let dialogRef = this.dialog.open(UserDialogComponent, {
      width: '250px',
      data: { name: this.name, animal: this.animal }
    });
  }

}
