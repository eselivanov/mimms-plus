import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-create-new-imm-dialog',
  templateUrl: './create-new-imm-dialog.component.html',
  styleUrls: ['./create-new-imm-dialog.component.css', '../../styles/shared-dialog-styles.css']
})
export class CreateNewImmDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<CreateNewImmDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
  }

  onCloseClick = () => {
    this.dialogRef.close();
  }

}
