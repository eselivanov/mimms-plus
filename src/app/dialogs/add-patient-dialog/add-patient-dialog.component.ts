import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { SearchPatientComponent } from '../../clinic-feature/search-patient/search-patient.component';
import { CreatePatientComponent } from '../../clinic-feature/create-patient/create-patient.component';

@Component({
  selector: 'app-add-patient-dialog',
  templateUrl: './add-patient-dialog.component.html',
  styleUrls: ['./add-patient-dialog.component.css', '../shared-styles.css']
})
export class AddPatientDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<AddPatientDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
  }

  onCloseClick = () => {
    this.dialogRef.close();
  }
}
