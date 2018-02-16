import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-create-new-special-consideration-dialog',
  templateUrl: './create-new-special-consideration-dialog.component.html',
  styleUrls: ['./create-new-special-consideration-dialog.component.css', '../../styles/shared-dialog-styles.css']
})
export class CreateNewSpecialConsiderationDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<CreateNewSpecialConsiderationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
  }

  onCloseClick = () => {
    this.dialogRef.close();
  }

}
