import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-create-consent-dialog',
  templateUrl: './create-consent-dialog.component.html',
  styleUrls: ['./create-consent-dialog.component.css', '../../styles/shared-dialog-styles.css']
})
export class CreateConsentDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<CreateConsentDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
  }

  onCloseClick = () => {
    this.dialogRef.close();
  }


}
